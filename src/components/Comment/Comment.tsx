import useInput from "../../hooks/common/useInput";

const Comment = () => {
  const [name, changeName] = useInput();
  const [content, changeContent] = useInput();
  const [password, changePassword] = useInput();

  return "comment";
};

export default Comment;
