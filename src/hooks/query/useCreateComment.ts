import { useMutation, useQueryClient } from "react-query";
import CommentApi from "../../api/comment";
import useGetCommentList from "./useGetCommentList";

const useCreateComment = (level: number) => {
  const queryClient = useQueryClient();
  const queryKey = useGetCommentList.getKey(level);

  const options = {
    onMutate: async (newComment: CommentType) => {
      await queryClient.cancelQueries({ queryKey });
      const previousCommentList = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (old: any) => {
        const newCommentList = [...old.data, newComment];
        return { ...old, data: newCommentList };
      });
      return { previousCommentList };
    },
    onError: (_err: any, _new: any, context: any) => {
      queryClient.setQueryData(queryKey, context.previousCommentList);
    },
    onSettled: async () => {
      queryClient.invalidateQueries({ queryKey });
    },
  };

  return useMutation(CommentApi.create, options);
};

export default useCreateComment;
