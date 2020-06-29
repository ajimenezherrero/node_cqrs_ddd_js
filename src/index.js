import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Bootstrap from './shared/infrastructure/bootstrap/Bootstrap';
import ApiRest from './apps/api-rest/index';

const start = async () => {
  try {
    const bootstrap = new Bootstrap();

    bootstrap.initModules();

    const apiRest = new ApiRest({
      logger: bootstrap.container.getInstance({ key: 'Logger' }),
      queryBus: bootstrap.container.getInstance({ key: 'QueryBus' }),
    });

    apiRest.init();
  } catch (error) {
    console.log('start -> error', error);
    process.exit(1);
  }
};

start();
