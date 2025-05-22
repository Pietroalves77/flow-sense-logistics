
export interface User {
  identifier: string | null;
  email: string | null;
  role: string;
  is_active: boolean;
  password_hash?: string; // Not displayed in the UI
}

export interface UserUpdatePayload {
  identifier: string | null;
  email: string | null;
  role: string;
  is_active: boolean;
  password?: string | null; // New password if provided
}
