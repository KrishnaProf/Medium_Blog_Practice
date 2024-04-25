import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign} from 'hono/jwt';
import { signinInput, signupInput } from '@leelakrishna/medium-common';

  
export const userRouter = new Hono<{
    Bindings: {
      DATABASE_URL: string,
      JWT_SECRET: string,
  
    },
    variables: {
      userId : string
    }
  }
  >();


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const { success } = signupInput.safeParse(body);
    if(!success){
      c.status(411);
      return c.json({message : "Inputs are not correct"})
    }

  
    try {
      // Check if user already exists
      const existingUser = await prisma.user.findUnique({
        where: {
          email: body.email,
        },
      });
  
    if (existingUser) {
        c.status(403);
        return c.json({ error: "User already exists" });
    }

    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password,
        },
    });

    const token = await sign({ id: user.id }, c.env?.JWT_SECRET);
      return c.json({jwt : token})
    }
    catch (e) {
      c.status(403);
      console.error(e)
      return c.json({error : "error while signing up"})
    }
  
  })
  
  userRouter.post('/signin', async (c) => {
    const body = await c.req.json()
    const prisma = new PrismaClient({
          datasourceUrl: c.env?.DATABASE_URL,
      }).$extends(withAccelerate());

      const { success } = signinInput.safeParse(body);
      if(!success){
        c.status(411);
        return c.json({message : "Inputs are not correct"})
      }
  
    try {
    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
            password: body.password
        }
    });

    console.log(user);
    if (!user) {
        c.status(403);
        return c.json({ error: "user not found" });
    }

    const jwt = await sign({ id: user.id }, c.env?.JWT_SECRET);
  
      return c.text(jwt)
  
    }
    catch(e){
      console.error(e)
      c.status(411);
      return c.text("Invalid")
    
    }
    
    
  })