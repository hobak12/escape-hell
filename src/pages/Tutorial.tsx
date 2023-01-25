import CommentInputs from "../components/Comment/CommentInputs";
import CommentList from "../components/Comment/CommentList";

const Tutorial = () => {
  return (
    <div className="bg-default flex-column text-white px-10 pt-2 pb-10">
      <div className="bg-header h-px" />
      <CommentInputs />
      <div className="bg-header h-px" />
      <CommentList />
    </div>
  );
};

export default Tutorial;
