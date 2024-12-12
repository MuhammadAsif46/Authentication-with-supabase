import { createClient } from "@supabase/supabase-js";

const supabase_url = import.meta.env.VITE_SUPABASE_URL;
const supabase_Api_key = import.meta.env.VITE_SUPABASE_API_KEY;

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabase_url, supabase_Api_key);
