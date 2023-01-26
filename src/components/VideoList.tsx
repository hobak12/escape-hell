import React from "react";
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

  if (isLoading) return <div style={{ color: "white" }}> Loading...</div>;

  if (isError)
    return <div style={{ color: "white" }}>An error has occurred</div>;

  return (
    <div className="pt-6">
      <div className="flex items-center gap-4 h-12 mb-3 mx-3">
        <TechIcon className="w-12 h-12" src={src} alt={title} />
        <h2 className="text-white text-3xl align-middle font-bold ">{title}</h2>
      </div>
      <div className="flex">
        {data?.data.items.map((i: any, idx: number) => {
          return (
            <div key={idx} className="mx-3">
              <a
                className="rounded h-48 aspect-video"
                href={`https://www.youtube.com/watch?v=${i.snippet.resourceId.videoId}`}
              >
                <img alt="" src={i.snippet.thumbnails.medium.url} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(VideoList);
