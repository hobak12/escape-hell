import CommentInputs from "../components/Comment/CommentInputs";
import CommentList from "../components/Comment/CommentList";
import { TutorialList } from "../components";

const Tutorial = () => {
  return (
    <>
      <TutorialList />
      <CommentInputs />
      <CommentList />
    </>
  );
};

export default Tutorial;
