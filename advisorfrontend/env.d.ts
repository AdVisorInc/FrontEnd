export interface Env {
  NEXT_PUBLIC_AUTH_STRATEGY?: string;

  NEXT_PUBLIC_SUPABASE_REF_ID?: string;
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;

  NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?: string;

  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY?: string;

  NEXT_PUBLIC_STRIPE_SECRET_KEY?: string;

  NEXT_PUBLIC_STRIPE_PUBLIC_KEY?: string;

  NEXT_META_ACCESS_TOKEN?: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
