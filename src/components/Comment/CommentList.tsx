import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useLocation } from "react-router-dom";
import useGetCommentList from "../../hooks/query/useGetCommentList";
import Comment from "./Comment";

const CommentList = () => {
  const { pathname } = useLocation();
  const level = Number(pathname.split("/")[1]);
  const { isLoading, isError, data } = useGetCommentList(level);

  if (isError) {
    return <>error...</>;
  }

  if (!isLoading) {
    <>
      {new Array(6).fill(null).map((_) => (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div className="bg-header mb-3 rounded p-3">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-2">
                <Skeleton width={150} height={24} />
                <Skeleton width={100} height={24} />
              </div>
              <div className="flex gap-2">
                <Skeleton width={45} height={24} />
                <Skeleton width={45} height={24} />
              </div>
            </div>
            <Skeleton width={"100%"} height={24} count={2} />
          </div>
        </SkeletonTheme>
      ))}
    </>;
  }

  return <div className="flex-column my-2">{data && data.map((comment) => <Comment key={comment.id} comment={comment} />)}</div>;
};

export default CommentList;
