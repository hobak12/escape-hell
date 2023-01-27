import { VideoList } from "../components";
import CommentInputs from "../components/Comment/CommentInputs";
import CommentList from "../components/Comment/CommentList";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import tutorial from "../data/tutorialList.json";

const Tutorial = () => {
  const { level } = useParams();
  const { title, techStackIcon } = tutorial[parseInt(level!) - 1];

  return (
    <>
      <div className="bg-neutral-900 min-h-screen">
        <Header />
        <h1 className="text-white text-6xl font-bold mx-3 my-8">{title}</h1>
        {techStackIcon.map((item) => (
          <VideoList
            level={level!}
            key={item.src}
            title={item.alt}
            src={item.src}
            url={item.url}
          />
        ))}
        <div className="bg-default flex-column text-white px-10 pt-2 pb-10">
          <div className="bg-header h-px" />
          <CommentInputs />
          <div className="bg-header h-px" />
          <CommentList />
        </div>
      </div>
    </>
  );
};

export default Tutorial;
