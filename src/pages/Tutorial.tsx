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
    <div className="bg-neutral-900 min-h-screen">
      <div className="mx-32 my-0 py-12">
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
        <CommentInputs />
        <CommentList />
      </div>
    </div>
  );
};

export default Tutorial;
