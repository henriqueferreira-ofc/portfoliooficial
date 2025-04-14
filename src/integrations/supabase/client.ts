
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qmimuzdkwerploivbjig.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtaW11emRrd2VycGxvaXZiamlnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzNDQ3ODcsImV4cCI6MjA1NzkyMDc4N30.bn297W_oICUW1WNJ9cn7Ntjg_DWhG_Hz0D74pAso1G4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  global: {
    headers: {
      'x-client-info': 'portfolio-website'
    }
  },
  db: {
    schema: 'public'
  }
});
