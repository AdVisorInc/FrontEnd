import type { User } from 'src/contexts/auth/user';

function generateToken(): string {
  const arr = new Uint8Array(12);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, (v) => v.toString(16).padStart(2, '0')).join('');
}

const user = {
  id: '489567',
  avatar: '/avatars/2.png',
  firstName: 'Clara',
  lastName: 'Martinez',
  email: 'example@uifort.com',
} satisfies User;

export interface SignUpParams {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export interface LoginWithOAuthParams {
  provider: 'google' | 'github';
}

export interface LoginWithPasswordParams {
  email?: string;
  password?: string;
}

export interface ResetPasswordParams {
  email?: string;
}

class AuthClient {
  async signUp(_: SignUpParams): Promise<{ error?: string }> {
    const token = generateToken();
    localStorage.setItem('uifort-authentication', token);

    return {};
  }

  async signInWithOAuth(_: LoginWithOAuthParams): Promise<{ error?: string }> {
    return {
      error: 'This functionality is not available in demo mode',
    };
  }

  async signInWithPassword(params: LoginWithPasswordParams): Promise<{ error?: string }> {
    const { email, password } = params;

    if (email !== 'example@uifort.com' || password !== 'DemoPass123') {
      return {
        error: 'Please ensure your credentials are correct',
      };
    }

    const token = generateToken();
    localStorage.setItem('uifort-authentication', token);

    return {};
  }

  async resetPassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return {
      error: 'This functionality is not available in demo mode',
    };
  }

  async updatePassword(_: ResetPasswordParams): Promise<{ error?: string }> {
    return {
      error: 'This functionality is not available in demo mode',
    };
  }

  async getUser(): Promise<{
    data?: User | null;
    error?: string;
  }> {
    const token = localStorage.getItem('uifort-authentication');

    if (!token) {
      return { data: null };
    }

    return { data: user };
  }

  async signOut(): Promise<{ error?: string }> {
    localStorage.removeItem('uifort-authentication');

    return {};
  }
}

export const authClient = new AuthClient();
