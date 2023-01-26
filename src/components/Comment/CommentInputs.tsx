import { useLocation } from "react-router-dom";
import useInput from "../../hooks/common/useInput";
import useCreateComment from "../../hooks/query/useCreateComment";
import { KeyboardEvent } from "react";

const CommentInputs = () => {
  const { pathname } = useLocation();
  const level = Number(pathname.split("/")[1]);

  const [name, changeName, resetName] = useInput("");
  const [content, changeContent, resetContent] = useInput("");
  const [password, changePassword, resetPassword] = useInput("");
  const { mutate: createComment } = useCreateComment(level);

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
      id: crypto.randomUUID(),
      name,
      content,
      created_at: new Date(),
      level,
      password,
    };
    createComment(commentData);
    resetInputs();
  };

  const onKeyUp = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      onCreateComment();
    }
  };

  return (
    <div className="flex-column gap-3 bg-header my-3 p-5">
      <div className="w-full flex flex-row gap-2">
        <input
          className="flex-1 bg-transparent border border-white rounded p-1"
          type="text"
          value={name}
          onChange={changeName}
          placeholder="작성자 이름"
        />
        <input
          className="flex-1 bg-transparent border border-white rounded p-1"
          type="password"
          value={password}
          onChange={changePassword}
          placeholder="비밀번호"
        />
      </div>
      <textarea
        className="w-full bg-transparent resize-none border rounded p-1 mt-3 mb-1"
        value={content}
        onChange={changeContent}
        onKeyUp={onKeyUp}
        placeholder="작성내용"
        rows={4}
      />
      <div className="flex justify-end">
        <button className="bg-primary px-2 rounded font-bold" onClick={onCreateComment}>
          등록
        </button>
      </div>
    </div>
  );
};

export default CommentInputs;
