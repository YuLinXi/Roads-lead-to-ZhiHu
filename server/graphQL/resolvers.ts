import { USERS, BOOKS } from '@server/utils/mock';

interface BooksQueryType {
  id: number;
}

const resolvers = {
  Query: {
    book: (query: BooksQueryType) => {
      return BOOKS;
    },
  },
};

export { resolvers };
