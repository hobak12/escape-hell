import { AxiosError } from "axios";
import { QueryKey, useMutation, useQueryClient } from "react-query";
import CommentApi from "../../api/comment";

interface UpdateCommentProps {
  queryKey: QueryKey;
  commentId: string;
}

interface CommentEditType {
  id: string;
  data: { name: string; content: string };
}

const useUpdateComment = ({ queryKey, commentId }: UpdateCommentProps) => {
  const queryClient = useQueryClient();

  const options = {
    onMutate: async (newComment: CommentType) => {
      await queryClient.cancelQueries({ queryKey });
      const previousCommentList = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (old: CommentType[] | undefined) => {
        if (!old) return [newComment];
        return [...old].map((c) => {
          if (c.id === commentId) return newComment;
          return c;
        });
      });
      return { previousCommentList };
    },
    onError: (_err: AxiosError, _new: CommentType, context: any) => {
      queryClient.setQueryData(queryKey, context.previousCommentList);
    },
    onSettled: async () => {
      queryClient.invalidateQueries({ queryKey });
    },
  };
  return useMutation<undefined[] | null, AxiosError, any>(CommentApi.update, options);
  // return useMutation<undefined[] | null, AxiosError, CommentEditType, CommentType[]>(CommentApi.update, options);
};

export default useUpdateComment;
