import { User } from './user';
import { Post } from './post';

export interface RootState {
  users: {
    users: User[];
    loading: boolean;
    fetchError: boolean;
  };
  posts: {
    posts: Post[];
    loading: boolean;
    fetchError: boolean;
  };
}
