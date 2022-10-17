export interface Book {
  id: number;
  title: string;
  authors: Author[];
  description: string;
  imageUrl: string;
  date: Date;
}

export interface Author {
  name: string;
}
