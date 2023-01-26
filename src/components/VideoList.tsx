import TechIcon from "./TechIcon";

type VideoListProps = {
  title: string;
  list: string[];
  src: string;
};

/**
 * @see https://tanstack.com/query/v4/docs/react/guides/suspense
 */
const VideoList = ({ title, list, src }: VideoListProps) => {
  return (
    <div className="pt-6">
      <div className="flex items-center gap-4 h-12 mb-3 mx-3">
        <TechIcon className="w-12 h-12" src={src} alt={title} />
        <h2 className="text-white text-3xl align-middle font-bold ">{title}</h2>
      </div>
      <ul className="flex flex-row gap-5 overflow-scroll whitespace-normal">
        {list.map((item) => {
          return (
            <li key={item} className="mx-3">
              <embed
                className="rounded h-48 aspect-video"
                src={item}
                type="video/mp4"
                title="Keyboard Cat"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VideoList;
