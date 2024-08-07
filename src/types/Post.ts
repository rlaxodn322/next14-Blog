export interface Post {
  createdAt: any;
  id: number;
  date: string;
  likes: number; // 좋아요 수
  //comments: Comment[]; // 댓글 배열
  title: string;
  content: string;
  comments: { id: number; author: string; content: string; date: string }[];
}
export interface Post1 {
  id: number;
  date: string;
  //comments: Comment[]; // 댓글 배열
  title: string;
  content: string;
  comments: { id: number; author: string; content: string; date: string }[];
}

export interface Comment {
  id: number;
  content: string;
  date: string;
}
export interface Message {
  id: number;
  content: string;
}
