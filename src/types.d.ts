declare interface CommentType {
  id: number;
  name: string;
  content: string;
  createdAt: number;
  level: number;
  password: string;
}

declare interface VideoType {
  id: number;
  level: number;
  subject: string;
  url: string;
}
