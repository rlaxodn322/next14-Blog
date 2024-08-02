export interface Post {
  id: number;
  date: string;
  likes: number; // 좋아요 수
  comments: Comment[]; // 댓글 배열
  title: string;
  content: string;
}

export interface Comment {
  id: number;
  content: string;
  date: string;
}
