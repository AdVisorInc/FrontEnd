export interface User {
  id: string;
  avatar: string | null;
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
}
