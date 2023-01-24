import { createClient } from "@supabase/supabase-js";

const supabase = createClient<CommentType>(process.env.REACT_APP_SUPABASE_URL!, process.env.REACT_APP_SUPABASE_API!);

export default supabase;
