import { VideoList } from "../components";
import CommentInputs from "../components/Comment/CommentInputs";
import CommentList from "../components/Comment/CommentList";

const Tutorial = () => {
  return (
    <div className="bg-neutral-900 min-h-screen">
      {/* header 컴포넌트 자리 */}
      <div className="mx-32 my-0">
        <VideoList
          title="JavaScript"
          list={[
            "https://www.youtube.com/embed/Uo3cL4nrGOk",
            "https://www.youtube.com/embed/14jlIxVrcvo",
            "https://www.youtube.com/embed/1UXHsCT18wE",
            "https://www.youtube.com/embed/bXzTXD_OJo0",
            "https://www.youtube.com/embed/NtfbWkxJTHw",
            "https://www.youtube.com/embed/NtfbWkxJTHw",
            "https://www.youtube.com/embed/LbmvbXPj8Fs",
          ]}
        />
        <CommentInputs />
        <CommentList />
      </div>
    </div>
  );
};

export default Tutorial;
