import Module from '../../../shared/infrastructure/components/Module';

import RecipePGRepository from './repository/RecipePGRepository';
import DefaultRecipeFactory from './factory/DefaultRecipeFactory';

import FindRecipeByIdQuery from '../application/find/FindRecipeByIdQuery';
import FindRecipeByIdQueryHandler from '../application/find/FindRecipeByIdQueryHandler';
import FindByIdUseCase from '../application/find/FindByIdUseCase';

export default class RecipeModule extends Module {
  constructor({ logger, db, queryBus }) {
    super();
    logger.info(`${RecipeModule.name} constructor`);

    this._instances.set('Logger', logger);
    this._instances.set('Database', db);
    this._instances.set('QueryBus', queryBus);
  }

  _buildRecipeFactory() {
    return new DefaultRecipeFactory();
  }

  _buildRecipeRepository() {
    return new RecipePGRepository({
      logger: this.getInstance({ key: 'Logger' }),
      database: this.getInstance({ key: 'Database' }),
    });
  }

  _buildFindRecipeByIdQueryHandler() {
    return new FindRecipeByIdQueryHandler({
      useCase: new FindByIdUseCase({
        recipeRepository: this.getInstance({ key: 'RecipeRepository' }),
        recipeFactory: this.getInstance({ key: 'RecipeFactory' }),
        logger: this.getInstance({ key: 'Logger' }),
      }),
    });
  }

  registerHandlers() {
    const queryBus = this.getInstance({ key: 'QueryBus' });
    const findRecipeByIdQueryHandler = this.getInstance({ key: 'FindRecipeByIdQueryHandler' });

    queryBus.bindHandler(findRecipeByIdQueryHandler, FindRecipeByIdQuery);
  }
}
