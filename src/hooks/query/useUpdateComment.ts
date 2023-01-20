import { useMutation } from "react-query";
import CommentApi from "../../api/comment";

const useUpdateComment = (options: any) => {
  return useMutation(CommentApi.update, options);
};

export default useUpdateComment;
