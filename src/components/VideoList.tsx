type VideoListProps = {
  title: string;
  list: string[];
};

const VideoList = ({ title, list }: VideoListProps) => {
  return (
    <div className="pt-6">
      <h2 className="text-white text-3xl font-bold mb-3">{title}</h2>
      <ul className="flex flex-row gap-5 overflow-scroll whitespace-normal">
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
      </ul>
    </div>
  );
};

export default VideoList;
