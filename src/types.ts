// src/types.ts

export type Author = {
  name: string;
  username: string;
  avatar: string;
};

export type BlogPost = {
  id: number;
  author: Author;
  title: string;
  content: string;
  likes: number;
  comments: number;
  publishedAt: string;
};