import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://fekhaeqcvzxinnddejeh.supabase.co/"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZla2hhZXFjdnp4aW5uZGRlamVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQwNDQwMzgsImV4cCI6MTk3OTYyMDAzOH0.8C7QLBMgjWb_sehueGjqiOSJZGKdD7K1bT7Urkz-7h0"
export const supabase = createClient(supabaseUrl, supabaseAnonKey)