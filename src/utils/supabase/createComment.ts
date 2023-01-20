import supabase from "../supabase";

const createComment = async (data: CommentType) => {
  const { error } = await supabase.from("comment").insert(data);
  return error;
};

export default createComment;
