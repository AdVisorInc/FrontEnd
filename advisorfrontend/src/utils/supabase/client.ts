import type { SupabaseClient } from '@supabase/supabase-js';
import { createClient as createBrowserClient } from '@supabase/supabase-js';
import { config } from 'src/utils/config';

let client: SupabaseClient | undefined;

export function createClient(): SupabaseClient {
  if (client) {
    return client;
  }

  client = createBrowserClient(config.supabase.url!, config.supabase.anonKey!);

  return client;
}
