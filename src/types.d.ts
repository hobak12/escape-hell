declare type TechIconImg = {
  src: string;
  alt: string;
  className?: string;
};

declare interface CommentType {
  id: string;
  name: string;
  content: string;
  created_at: Date;
  level: number;
  password: string;
}

declare interface UpdateCommentType {
  name?: string;
  content?: string;
}

declare interface VideoType {
  id: string;
  level: number;
  subject: string;
  url: string;
}
