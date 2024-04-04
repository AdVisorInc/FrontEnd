export interface Env {
  NEXT_PUBLIC_AUTH_STRATEGY?: string;

  NEXT_PUBLIC_SUPABASE_REF_ID?: string;
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;

  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
