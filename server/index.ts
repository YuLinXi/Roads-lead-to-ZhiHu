import { DarukServer } from 'daruk';
import { ApolloServer } from 'apollo-server-koa';
import { resolvers } from './graphQL/resolvers';
import { typeDefs } from './graphQL/typeDefs';
import '@server/controller/index';
import { PORT } from '@server/utils/config';

(async () => {
  const myapp = DarukServer();
  const server = new ApolloServer({ typeDefs, resolvers });
  server.applyMiddleware({ app: myapp.app });
  await myapp.binding();
  myapp.listen(PORT);
})();
