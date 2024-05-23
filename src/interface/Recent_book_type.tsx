export interface Recent_book_type {
  id: number;
  title: string;
  authorName: string;
  bookImage: string;
  description: string;
  episode: number; //focus 됐을 때 -화
  requiredTime: number; //focus 됐을 때
  progress: number;
  lastViewed: string;
}
