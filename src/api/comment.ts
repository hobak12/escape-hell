import { QueryFunctionContext } from "react-query";
import supabase from "../utils/supabase";

const DB = "comment";

const CommentApi = {
  create: async (data: CommentType): Promise<undefined[] | null> => {
    const { data: res } = await supabase.from(DB).insert(data);
    return res;
  },

  getAll: async ({ queryKey }: QueryFunctionContext): Promise<CommentType[] | null> => {
    const level = queryKey[1];
    const { data } = await supabase.from(DB).select().eq("level", level).order("created_at", { ascending: false });
    return data;
  },

  update: async ({ id, data }: { id: string; data: UpdateCommentType }): Promise<undefined[] | null> => {
    const { data: res } = await supabase.from(DB).update(data).eq("id", id);
    return res;
  },

  delete: async (id: string): Promise<undefined[] | null> => {
    const { data } = await supabase.from(DB).delete().eq("id", id);
    return data;
  },
};

export default CommentApi;
