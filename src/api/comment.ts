import supabase from "../utils/supabase";
import { QueryFunctionContext } from "react-query";

const DB = "comment";

const CommentApi = {
  create: async (data: CommentType) => {
    const { data: commentData } = await supabase.from(DB).insert(data);
    return commentData;
  },

  getAll: async ({ queryKey }: QueryFunctionContext) => {
    const level = queryKey[1];
    return await supabase.from(DB).select().eq("level", level);
  },

  update: async ({ id, data }: { id: string; data: UpdateCommentType }) => await supabase.from(DB).update(data).eq("id", id),

  delete: async (id: string) => {
    return await supabase.from(DB).delete().eq("id", id);
  },
};

export default CommentApi;
