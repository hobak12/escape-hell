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

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <>
      {data?.data?.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
};

export default CommentList;
