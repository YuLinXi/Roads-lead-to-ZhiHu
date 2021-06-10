import { gql } from 'apollo-server-koa';
// Construct a schema, using GraphQL schema language

const typeDefs = gql`
  enum BOOK_TYPE {
    TECH
    CHINESE
  }
  type Book {
    title: String
    author: String
    user: User
  }
  type User {
    name: String
  }
  type Query {
    book: Book
  }
`;

export { typeDefs };
