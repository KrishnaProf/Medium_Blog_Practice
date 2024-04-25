interface BlogcardProps {
  AuthorName: string;
  BlogTitle: string;
  BlogContent: string;
  PublishedDate: string;
}

export const Blogcard = ({
  AuthorName,
  BlogTitle,
  BlogContent,
  PublishedDate,
}: BlogcardProps) => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4">
      <div className="flex">
        <div className="flex justify-center flex-col">
          <Avatar name={AuthorName} size="small" />
        </div>
        <div className=" flex justify-center flex-col font-thin pl-2 pr-2 text-xs">
          {AuthorName}
        </div>{" "}
        <div className="flex justify-center flex-col font-bold pb-2">.</div>{" "}
        <div className=" flex justify-center flex-col font-thin pl-2 pr-2 text-xs">
          {PublishedDate}
        </div>
      </div>
      <div className="text-xl font-bold">{BlogTitle}</div>
      <div className="text-md font-thin">
        {BlogContent.slice(0, 100) + "..."}
      </div>
      <div className="text-slate-400 text-sm font-thin pt-4">{`${Math.ceil(
        BlogContent.length / 100
      )} minute(s) read`}</div>
    </div>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size: "small" | "big";
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
