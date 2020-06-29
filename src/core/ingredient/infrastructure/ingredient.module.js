import Module from '../../../shared/infrastructure/components/Module';

import IngredientPGRepository from './repository/IngredientPGRepository';
import DefaultIngredientFactory from './factory/DefaultIngredientFactory';

import FindByIdQuery from '../application/find/FindByIdQuery';
import FindByIdQueryHandler from '../application/find/FindByIdQueryHandler';
import FindByIdUseCase from '../application/find/FindByIdUseCase';

export default class IngredientModule extends Module {
  constructor({ logger, db, queryBus }) {
    super();
    logger.info(`${IngredientModule.name} constructor`);

    this._instances.set('Logger', logger);
    this._instances.set('Database', db);
    this._instances.set('QueryBus', queryBus);
  }

  _buildIngredientFactory() {
    return new DefaultIngredientFactory();
  }

  _buildIngredientRepository() {
    return new IngredientPGRepository({
      logger: this.getInstance({ key: 'Logger' }),
      database: this.getInstance({ key: 'Database' }),
    });
  }

  _buildFindByIdQueryHandler() {
    return new FindByIdQueryHandler({
      useCase: new FindByIdUseCase({
        ingredientRepository: this.getInstance({ key: 'IngredientRepository' }),
        ingredientFactory: this.getInstance({ key: 'IngredientFactory' }),
        logger: this.getInstance({ key: 'Logger' }),
      }),
    });
  }

  registerHandlers() {
    const queryBus = this.getInstance({ key: 'QueryBus' });
    const findByIdQueryHandler = this.getInstance({ key: 'FindByIdQueryHandler' });

    queryBus.bindHandler(findByIdQueryHandler, FindByIdQuery);
  }
}
