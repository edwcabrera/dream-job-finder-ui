// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://yjhruiuzxjcgvzriiqua.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqaHJ1aXV6eGpjZ3Z6cmlpcXVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5NDM3MDUsImV4cCI6MjA2MDUxOTcwNX0.Laf_1vTNyKgGPV_WrPlWuIFQS22mcwmex_Yi1uOsKgE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);