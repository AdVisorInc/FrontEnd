import type { User } from 'src/contexts/user';

export interface AuthContextValue {
  user: User | null;
  error: string | null;
  isLoading: boolean;
  checkSession: () => Promise<void>;
}
