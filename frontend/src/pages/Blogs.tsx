import { Appbar } from "../components/Appbar";
import { Blogcard } from "../components/Blogcard";

export const Blogs = () => {
  return (
    <div>
      <Appbar />

      <div className="flex justify-center">
        <div className="max-w-xl">
          <Blogcard
            AuthorName={"Leela Krishna"}
            BlogTitle={
              "How an ugly single page application makes $5000 a month without affiliate marketing or adsense"
            }
            BlogContent={
              "How an ugly single page application makes $5000 a month without affiliate marketing or adsense How an ugly single page application makes $5000 a month without affiliate marketing or adsense How an ugly single page application makes $5000 a month without affiliate marketing or adsense"
            }
            PublishedDate={"Feb 9th 2024"}
          />

          <Blogcard
            AuthorName={"Leela Krishna"}
            BlogTitle={
              "How an ugly single page application makes $5000 a month without affiliate marketing or adsense"
            }
            BlogContent={
              "How an ugly single page application makes $5000 a month without affiliate marketing or adsense How an ugly single page application makes $5000 a month without affiliate marketing or adsense How an ugly single page application makes $5000 a month without affiliate marketing or adsense"
            }
            PublishedDate={"Feb 9th 2024"}
          />

          <Blogcard
            AuthorName={"Leela Krishna"}
            BlogTitle={
              "How an ugly single page application makes $5000 a month without affiliate marketing or adsense"
            }
            BlogContent={
              "How an ugly single page application makes $5000 a month without affiliate marketing or adsense How an ugly single page application makes $5000 a month without affiliate marketing or adsense How an ugly single page application makes $5000 a month without affiliate marketing or adsense"
            }
            PublishedDate={"Feb 9th 2024"}
          />
        </div>
      </div>
    </div>
  );
};
