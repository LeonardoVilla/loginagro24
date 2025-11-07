//npm install @supabase/supabase-js
import { createClient } from "@supabase/supabase-js";
import { AppState, Platform } from 'react-native'
import { processLock } from '@supabase/supabase-js'
//Lendo as variavis do .env
const supabaseUrl = 'https://jflliamryvtzpwapdwbh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpmbGxpYW1yeXZ0enB3YXBkd2JoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NjQyMzIyNywiZXhwIjoyMDcxOTk5MjI3fQ.Jvu1jPltrz-NFLIMEllC6MyRshECIF7XLGm1ZEcbXxU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    // ...(Platform.OS !== "web" ? { storage: AsyncStorage } : {}),
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
})
// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
if (Platform.OS !== "web") {
  AppState.addEventListener('change', (state) => {
    if (state === 'active') {
      supabase.auth.startAutoRefresh()
    } else {
      supabase.auth.stopAutoRefresh()
    }
  })
}