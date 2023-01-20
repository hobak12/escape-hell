import { KeyboardEvent, useState } from "react";
import { useQueryClient } from "react-query";
import { useLocation } from "react-router-dom";
import useInput from "../../hooks/common/useInput";
import useDeleteComment from "../../hooks/query/useDeleteComment";
import useGetCommentList from "../../hooks/query/useGetCommentList";
import useUpdateComment from "../../hooks/query/useUpdateComment";
import getDate from "../../utils/getDate";

const Comment = ({ comment }: { comment: CommentType }) => {
  const queryClient = useQueryClient();
  const { pathname } = useLocation();
  const level = Number(pathname.split("/")[1]);

  const { name, content, password } = comment;

  const [isEdit, setIsEdit] = useState(false);
  const [editName, changeEditName] = useInput(name);
  const [editContent, changeEditContent] = useInput(content);
  const [editPassword, changeEditPassword] = useInput();

  const { mutate: updateComment } = useUpdateComment({
    onSuccess: async () => {
      queryClient.invalidateQueries(useGetCommentList.getKey(level));
    },
  });
  const { mutate: deleteComment } = useDeleteComment({
    onSuccess: async () => {
      queryClient.invalidateQueries(useGetCommentList.getKey(level));
    },
  });

  const onUpdate = () => {
    if (password !== editPassword) {
      return alert("비밀번호가 다릅니다.");
    }
    const commentData = {
      id: comment.id,
      data: { name: editName, content: editContent },
    };
    updateComment(commentData);
    setIsEdit(false);
  };

  const onDelete = () => {
    deleteComment(comment.id);
  };

  const onKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
    }
  };

  return (
    <>
      {isEdit && (
        <div>
          <div className="bg-yellow-200">
            <input type="text" value={editName} onChange={changeEditName} placeholder="작성자 이름" />
            <input type="password" value={editPassword} onChange={changeEditPassword} placeholder="비밀번호" />
            <textarea value={editContent} onChange={changeEditContent} onKeyUp={onKeyUp} placeholder="작성내용" />
            <button onClick={onUpdate}>수정</button>
          </div>
        </div>
      )}
      {!isEdit && (
        <div>
          <div>
            {comment.name}
            {getDate(comment.created_at)}
          </div>
          <div>
            <button onClick={() => setIsEdit(true)}>수정</button>
            <button onClick={onDelete}>삭제</button>
          </div>
          {comment.content}
        </div>
      )}
    </>
  );
};

export default Comment;
