import { VideoList } from "../components";
import CommentInputs from "../components/Comment/CommentInputs";
import CommentList from "../components/Comment/CommentList";
import { useParams } from "react-router-dom";
import tutorial from "../data/tutorialList.json";

const Tutorial = () => {
  const { level } = useParams();
  const { title, techStackIcon } = tutorial[parseInt(level!) - 1];

  return (
    <div className="bg-neutral-900 min-h-screen">
      {/* header 컴포넌트 자리 */}
      <div className="mx-32 my-0 py-12">
        <h1 className="text-white text-6xl font-bold mx-3 my-8">{title}</h1>
        {techStackIcon.map((item) => (
          <VideoList
            key={item.src}
            title={item.alt}
            src={item.src}
            list={[
              "https://www.youtube.com/embed/Uo3cL4nrGOk",
              "https://www.youtube.com/embed/14jlIxVrcvo",
              "https://www.youtube.com/embed/1UXHsCT18wE",
              "https://www.youtube.com/embed/bXzTXD_OJo0",
              "https://www.youtube.com/embed/NtfbWkxJTHw",
              "https://www.youtube.com/embed/LbmvbXPj8Fs",
            ]}
          />
        ))}
        <CommentInputs />
        <CommentList />
      </div>
    </div>
  );
};

export default Tutorial;
