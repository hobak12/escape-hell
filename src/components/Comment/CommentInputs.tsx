import { v4 as uuid } from "uuid";
import { useLocation } from "react-router-dom";
import { useQueryClient } from "react-query";
import useInput from "../../hooks/common/useInput";
import useCreateComment from "../../hooks/query/useCreateComment";
import useGetCommentList from "../../hooks/query/useGetCommentList";
import { KeyboardEvent } from "react";

const CommentInputs = () => {
  const queryClient = useQueryClient();

  const { pathname } = useLocation();
  const level = Number(pathname.split("/")[1]);

  const [name, changeName, resetName] = useInput("");
  const [content, changeContent, resetContent] = useInput("");
  const [password, changePassword, resetPassword] = useInput("");
  const queryKey = useGetCommentList.getKey(level);
  const { mutate: createComment } = useCreateComment({
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
  });

  const resetInputs = () => {
    resetName();
    resetContent();
    resetPassword();
  };

  const onCreateComment = async () => {
    if (!name || !content || !password) {
      return alert("모든 값을 입력해주세요.");
    }
    const commentData = {
      id: uuid(),
      name,
      content,
      created_at: new Date(),
      level,
      password,
    };
    createComment(commentData);
    resetInputs();
    return alert("댓글을 작성하였습니다.");
  };

  const onKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      onCreateComment();
    }
  };

  return (
    <div className="bg-yellow-200">
      <input type="text" value={name} onChange={changeName} placeholder="작성자 이름" />
      <input type="password" value={password} onChange={changePassword} placeholder="비밀번호" />
      <textarea value={content} onChange={changeContent} onKeyUp={onKeyUp} placeholder="작성내용" />
      <button onClick={onCreateComment}>작성</button>
    </div>
  );
};

export default CommentInputs;
