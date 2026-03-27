import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://mvvdofifzlclzxlnaudu.supabase.co"
const supabaseAnonKey = "sb_publishable_g6_7Fk-fZ9_nFNYfl5Vsug_ouhiWDDG"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)