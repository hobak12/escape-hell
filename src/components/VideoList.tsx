import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";

type VideoListProps = {
  title: string;
  list: string[];
};

/**
 * @see https://tanstack.com/query/v4/docs/react/guides/suspense
 */
const VideoList = ({ title, list }: VideoListProps) => {
  return (
    <div className="pt-6">
      <h2 className="text-white text-3xl font-bold mb-3 mx-3">{title}</h2>
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
