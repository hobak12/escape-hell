import React from "react";
import { Carousel } from "@trendyol-js/react-carousel";

type VideoListProps = {
  title: string;
  list: string[];
};

const VideoList = ({ title, list }: VideoListProps) => {
  return (
    <div className="pt-6">
      <h2 className="text-white text-3xl font-bold mb-3">{title}</h2>
      {/* <ul className="flex flex-row gap-5 overflow-scroll whitespace-normal"> */}
      <Carousel
        show={3}
        slide={1}
        // swiping={true}
        infinite={false}
        rightArrow={<div className="text-white">{">"}</div>}
        leftArrow={<div className="text-white">{"<"}</div>}
      >
        {list.map((item) => (
          <li key={item}>
            <iframe
              className="w-[25rem] h-[14.0625rem] rounded"
              src={item}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </li>
        ))}
      </Carousel>
      {/* </ul> */}
    </div>
  );
};

export default React.memo(VideoList);
