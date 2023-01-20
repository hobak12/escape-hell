import { useMutation } from "react-query";
import CommentApi from "../../api/comment";

const useDeleteComment = (options: any) => {
  return useMutation(CommentApi.delete, options);
};

export default useDeleteComment;
