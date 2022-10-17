import { createServer, Response, Model, Factory } from 'miragejs';
import Schema from 'miragejs/orm/schema';
import { BOOKS } from './books.db';
import { Book } from './types';

export const runServer = () =>
  createServer({
    // https://www.goodreads.com/list/show/264.Books_That_Everyone_Should_Read_At_Least_Once

    models: {
      book: Model,
    },

    factories: {
      movie: Factory.extend({}),
    },

    routes() {
      this.namespace = 'api';

      this.get('/books', (schema, request) => {
        return { books: schema.db.books };
      });
      this.get('/books/:id', (schema, request) => {
        const bookId = request.params.id;
        const foundBook = schema.db.books.findBy({ id: bookId });
        return { book: foundBook };
      });
      this.post('/books', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        attrs.id = Math.floor(Math.random() * 100);

        schema.db.books.insert(attrs);
        return null;
      });
      this.put('/books/:id', (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        // attrs.id = Math.floor(Math.random() * 100);

        schema.db.books.update(id, attrs);
        return null;
      });
      this.del('/books/:id', (schema, request) => {
        schema.db.books.remove({ id: request.params.id });
        return null;
      });
    },

    seeds(server) {
      server.create('book', BOOKS[0] as object);
      server.create('book', BOOKS[1] as object);
      server.create('book', BOOKS[2] as object);
      server.create('book', BOOKS[3] as object);
      server.create('book', BOOKS[4] as object);
    },
  });
