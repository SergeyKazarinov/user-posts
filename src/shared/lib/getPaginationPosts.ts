import { IPost } from 'types/post';

export const getPaginationPost = (
  posts: IPost[],
  number: number,
) => posts.slice(10 * number - 10, 10 * number);
