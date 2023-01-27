import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import TechIcon from "./TechIcon";
import { useQuery } from "react-query";
import axios from "axios";

type VideoListProps = {
  title: string;
  url: string;
  src: string;
  level: string;
};

/**
 * @see https://tanstack.com/query/v4/docs/react/guides/suspense
 */
const VideoList = ({ title, url, src, level }: VideoListProps) => {
  const { data, isError, isLoading } = useQuery(
    ["youtubeData", level, title],
    () => axios.get(url)
  );

  if (isLoading) {
    return (
      <>
        {new Array(6).fill(null).map((_, idx) => (
          <SkeletonTheme baseColor="#202020" highlightColor="#444" key={idx}>
            <div className="flex flex-row gap-5 ml-3 mb-1 items-center ">
              <Skeleton width={48} height={48} />
              <Skeleton width={110} height={36} />
            </div>

            <div className="bg-header mb-3 rounded p-3">
              <div className="flex flex-row ">
                <div className="flex flex-row gap-2">
                  <Skeleton width={320} height={180} />
                  <Skeleton width={320} height={180} />
                  <Skeleton width={320} height={180} />
                  <Skeleton width={320} height={180} />
                  <Skeleton width={320} height={180} />
                  <Skeleton width={320} height={180} />
                </div>
              </div>
            </div>
          </SkeletonTheme>
        ))}
      </>
    );
  }

  if (isError) return <div className="text-white">An error has occurred</div>;

  return (
    <div className="pt-6">
      <div className="flex items-center gap-4 h-12 mb-3 mx-3">
        <TechIcon className="w-12 h-12" src={src} alt={title} />
        <h2 className="text-white text-3xl align-middle font-bold ">{title}</h2>
      </div>

      <ul className="overflow-x-auto whitespace-nowrap no-scrollbar">
        {data?.data.items.map((i: any, idx: number) => {
          return (
            <li key={idx} className="inline-block mx-3">
              <a
                href={`https://www.youtube.com/watch?v=${i.snippet.resourceId.videoId}`}
                rel="noreferrer"
                target="_blank"
              >
                <img alt="" src={i.snippet.thumbnails.medium.url} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default VideoList;
