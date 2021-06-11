import { USERS, BOOKS } from '@server/utils/mock';

interface BooksQueryType {
  id: number;
}

const resolvers = {
  Query: {
    launches: (_, __, { dataSources }) => dataSources.launchAPI.getAllLaunches(),
    launch: (_, { id }, { dataSources }) => dataSources.launchAPI.getLaunchById({ launchId: id }),
  },
  Mission: {
    // 默认的size为 'LARGE'
    missionPatch: (mission, { size } = { size: 'LARGE' }) => {
      return size === 'SMALL' ? mission.missionPatchSmall : mission.missionPatchLarge;
    },
  },
};

export { resolvers };
