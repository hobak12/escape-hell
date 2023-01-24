import { useQuery } from "react-query";
import CommentApi from "../../api/comment";

const useGetCommentList = (level: number) => {
  return useQuery(["commentList", level], CommentApi.getAll);
};

useGetCommentList.getKey = (level: number) => ["commentList", level];

export default useGetCommentList;
