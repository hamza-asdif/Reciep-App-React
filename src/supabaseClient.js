import { createClient } from '@supabase/supabase-js';

// In Vite, environment variables are accessed via import.meta.env and must be prefixed with VITE_
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
