import { IPost } from 'types/post';

export const filterPosts = (
  posts: IPost[],
  value: string,
) => posts.filter((item) => item.title.includes(value));
