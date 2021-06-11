import { DarukServer } from 'daruk';
import { ApolloServer } from 'apollo-server-koa';
import { resolvers } from './graphQL/resolvers';
import { typeDefs } from './graphQL/typeDefs';
import '@server/controller/index';
import { LaunchAPI } from '@server/datasources'
import { PORT } from '@server/utils/config';

(async () => {
  const myapp = DarukServer();
  const server = new ApolloServer({ typeDefs, resolvers, dataSources: () => ({
    launchAPI: new LaunchAPI()
  }) });
  server.applyMiddleware({ app: myapp.app });
  await myapp.binding();
  myapp.listen(PORT);
  console.log(`🚀 Server ready at port ${PORT}`);
})();
