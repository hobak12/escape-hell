import { useMutation } from "react-query";
import CommentApi from "../../api/comment";

interface OptionsType {
  onMutate: () => void;
  onError: (_err: any, _new: any, context: any) => void;
  onSettled: () => void;
}

const useDeleteComment = (options: OptionsType) => {
  return useMutation(CommentApi.delete, options);
};

export default useDeleteComment;
