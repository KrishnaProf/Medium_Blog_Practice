import { Link } from "react-router-dom";

interface BlogcardProps {
  AuthorName: string;
  BlogTitle: string;
  BlogContent: string;
  PublishedDate: string;
  id: number;
}

export const Blogcard = ({
  AuthorName,
  BlogTitle,
  BlogContent,
  PublishedDate,
  id,
}: BlogcardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <Avatar name={AuthorName} />
          <div className="font-extralight pl-2 text-sm flex justify-center flex-col">
            {AuthorName}
          </div>
          <div className="flex justify-center flex-col pl-2 flex justify-center flex-col">
            <Circle />
          </div>
          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            {PublishedDate}
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">{BlogTitle}</div>
        <div className="text-md font-thin">
          {BlogContent.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
          {`${Math.ceil(BlogContent.length / 100)} minute(s) read`}
        </div>
      </div>
    </Link>
  );
};

export function Circle() {
  return <div className="h-1 w-1 rounded-full bg-slate-500"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`"relative inline-flex items-center justify-center ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      } overflow-hidden bg-gray-300 rounded-full dark:bg-gray-600"`}
    >
      <span className="text-xs font-extralight text-gray-600 dark:text-gray-500">
        {name[0]}
      </span>
    </div>
  );
}
