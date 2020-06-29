import Container from './Container';
import Config from '../configuration/Config';

import RecipeModule from '../../../core/recipe/infrastructure/recipe.module';
import IngredientModule from '../../../core/ingredient/infrastructure/ingredient.module';

const keys = {
  server: 'Server',
  database: 'Database',
  logger: 'Logger',
};

class Bootstrap {
  constructor() {
    this._config = new Config().config;
    this._container = new Container({ config: this._config });
  }

  get container() {
    return this._container;
  }

  initModules() {
    const recipeModule = new RecipeModule({
      logger: this._container.getInstance({ key: 'Logger' }),
      db: this._container.getInstance({ key: 'Database' }),
      queryBus: this._container.getInstance({ key: 'QueryBus' }),
    });
    const ingredientModule = new IngredientModule({
      logger: this._container.getInstance({ key: 'Logger' }),
      db: this._container.getInstance({ key: 'Database' }),
      queryBus: this._container.getInstance({ key: 'QueryBus' }),
    });

    recipeModule.registerHandlers();
    ingredientModule.registerHandlers();
  }
}

export default Bootstrap;
