import { AxiosError } from "axios";
import { QueryKey, useMutation, useQueryClient } from "react-query";
import CommentApi from "../../api/comment";

interface DeleteCommentProps {
  queryKey: QueryKey;
  commentId: string;
}

const useDeleteComment = ({ queryKey, commentId }: DeleteCommentProps) => {
  console.log(commentId);
  const queryClient = useQueryClient();
  const options = {
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey });
      const previousCommentList = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (old: CommentType[] | undefined) => {
        if (!old) return [];
        return [...old].filter((c) => c.id !== commentId);
      });
      return { previousCommentList };
    },
    onError: (_err: AxiosError, _new: void, context: any) => {
      queryClient.setQueryData(queryKey, context.previousCommentList);
    },
    onSettled: async () => {
      queryClient.invalidateQueries({ queryKey });
    },
  };
  return useMutation<undefined[] | null, AxiosError, any>(CommentApi.delete, options);
  // return useMutation<undefined[] | null, AxiosError, string, CommentType[]>(CommentApi.delete, options);
};

export default useDeleteComment;
