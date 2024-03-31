import { AuthStrategy } from 'src/utils/auth/strategy';

export interface Config {
  auth: {
    strategy: keyof typeof AuthStrategy;
  };
  supabase: {
    url?: string;
    anonKey?: string;
  };
  gtm?: {
    id?: string;
  };
}

export const config = {
  auth: {
    strategy:
      (process.env.NEXT_PUBLIC_AUTH_STRATEGY as keyof typeof AuthStrategy) || AuthStrategy.CUSTOM,
  },
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  gtm: {
    id: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID,
  },
} satisfies Config;
