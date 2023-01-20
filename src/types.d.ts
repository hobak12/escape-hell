declare interface CommentType extends CreateCommentType {
  id: string;
  name: string;
  content: string;
  created_at: Date;
  level: number;
  password: string;
}

declare interface VideoType {
  id: string;
  level: number;
  subject: string;
  url: string;
}
