import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
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
      <ScrollingCarousel className="flex">
        {list.map((item) => {
          return (
            <div key={item} className="mx-3">
              <iframe
                className="rounded h-48 aspect-video"
                src={item}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          );
        })}
      </ScrollingCarousel>
    </div>
  );
};

export default React.memo(VideoList);
