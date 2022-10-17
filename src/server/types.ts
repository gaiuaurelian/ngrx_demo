export type Book = {
  title: string;
  authors: string[];
  description: string;
  cover: string;
  date: string;
};

type BooksResponse = {
  books: Book[];
};
