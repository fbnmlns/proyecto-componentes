import { writable } from 'svelte/store';

export interface TodoItem {
    text: string;
    status: boolean;
}

interface AuthUser {
    uid: string;
    email: string;
    data?: {
        tasks: TodoItem[];
    };
  }
   
  const authUser = writable<AuthUser | undefined>(undefined);
   
  export { authUser };