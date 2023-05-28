import { ASC, DESC, DEFAULT } from 'shared';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface IComments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type TSortValues = typeof ASC | typeof DESC | typeof DEFAULT;
