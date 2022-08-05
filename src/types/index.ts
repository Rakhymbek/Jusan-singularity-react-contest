export interface IPosts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsProps{
  posts: IPosts[];
}