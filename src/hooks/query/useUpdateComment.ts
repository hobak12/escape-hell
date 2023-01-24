import { AxiosError } from "axios";
import { useMutation } from "react-query";
import CommentApi from "../../api/comment";

interface OptionsType {
  //! newComment에 CommentType을 지정하면 에러 발생. 어떤 타입을 주어야하는지 잘 모르겠습니다.
  onMutate: (newComment: any) => void;
  onError: (_err: AxiosError, _new: any, context: any) => void;
  onSettled: () => void;
}

const useUpdateComment = (options: OptionsType) => {
  return useMutation(CommentApi.update, options);
};

export default useUpdateComment;
