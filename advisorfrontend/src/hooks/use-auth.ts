import React from 'react';
import { UserContext } from 'src/contexts/auth/auth-context';
import { AuthContextValue } from 'src/contexts/auth/types';

export function useAuth(): AuthContextValue {
  const ctx = React.useContext(UserContext);

  if (!ctx) {
    throw new Error('useAuth must be used within a AuthProvider');
  }

  return ctx;
}
