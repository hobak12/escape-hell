import useInput, { InputType } from "../../hooks/common/useInput";
import createComment from "../../utils/supabase/createComment";
import { v4 as uuid } from "uuid";
import { useLocation } from "react-router-dom";

const Comment = () => {
  const { pathname } = useLocation();
  const level = Number(pathname.substring(1));
  const [name, changeName, resetName]: InputType = useInput("");
  const [content, changeContent, resetContent] = useInput("");
  const [password, changePassword, resetPassword] = useInput("");

  const resetInputs = () => {
    resetName();
    resetContent();
    resetPassword();
  };

  const onCreateComment = async () => {
    if (!name || !content || !password) {
      return alert("모든 값을 입력해주세요.");
    }
    await createComment({
      id: uuid(),
      name,
      content,
      created_at: new Date(),
      level,
      password,
    });
    resetInputs();
    return alert("댓글을 작성하였습니다.");
  };

  return (
    <div>
      <input type="text" value={name} onChange={changeName} />
      <input type="password" value={content} onChange={changeContent} />
      <textarea value={password} onChange={changePassword} />
      <button onClick={onCreateComment}>수정</button>
    </div>
  );
};

export default Comment;
