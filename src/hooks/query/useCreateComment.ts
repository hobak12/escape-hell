import { useMutation } from "react-query";
import CommentApi from "../../api/comment";

const useCreateComment = (options: any) => {
  return useMutation(CommentApi.create, options);
};

export default useCreateComment;
