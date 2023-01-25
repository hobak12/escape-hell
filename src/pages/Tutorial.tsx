import { lazy, Suspense } from "react";
// import { VideoList } from "../components";

const VideoList = lazy(() => import("../components/VideoList"));

const renderLoader = () => <p>Loading</p>;

import CommentInputs from "../components/Comment/CommentInputs";
import CommentList from "../components/Comment/CommentList";

const Tutorial = () => {
  return (
    <div className="bg-neutral-900 min-h-screen">
      <div className="mx-32 my-0">
        <Suspense fallback={renderLoader()}>
          <VideoList
            title="JavaScript"
            list={[
              "https://www.youtube.com/embed/Uo3cL4nrGOk",
              "https://www.youtube.com/embed/14jlIxVrcvo",
              "https://www.youtube.com/embed/1UXHsCT18wE",
              "https://www.youtube.com/embed/bXzTXD_OJo0",
              "https://www.youtube.com/embed/NtfbWkxJTHw",
            ]}
          />
        </Suspense>
        <CommentInputs />
        <CommentList />
      </div>
    </div>
  );
};

export default Tutorial;
