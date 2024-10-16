// auth/types.ts

export interface Message {
  content: string;
  severity: "info" | "warning" | "success" | "error";
}

export interface AuthContextType {
  token: string | null;
  refreshToken: string | null;
  loading: boolean;
  message: Message | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  updateToken: () => Promise<void>;
  setMessage: (message: Message | null) => void;
  setLoading: (loading: boolean) => void;
  setRefreshToken :(refreshToken:string | null)=> void;
  setToken:(token:string | null) => void;
}
 