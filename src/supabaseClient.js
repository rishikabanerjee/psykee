 import { createClient } from '@supabase/supabase-js';
 
 const supabaseUrl = 'https://comuttesamnjaabixbfc.supabase.co';
 const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNvbXV0dGVzYW1uamFhYml4YmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxMzAwMjQsImV4cCI6MjEwMTcwNjAyNH0.Tx5I_O8yC11NKFXQD19DF6jPyuoUJhA_oItzsMCQ2JI';

 export const supabase = createClient(supabaseUrl, supabaseAnonKey);
 