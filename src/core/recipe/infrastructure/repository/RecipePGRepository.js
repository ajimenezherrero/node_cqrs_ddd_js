import RecipeRepository from '../../domain/RecipeRepository';

import catchPostgresError from './catchPostgresError';
import create from './create';
import findAll from './findAll';
import findById from './findById';
import update from './update';

class RecipePGRepository extends RecipeRepository {
  constructor({ logger, database }) {
    super();
    logger.info(`${RecipeRepository.name} constructor`);
    this._logger = logger;
    this._database = database;
  }

  @catchPostgresError
  async create({ id, name, ingredients }) {
    this._logger.debug(`RecipeRepository#Create ${name}`);
    const recipe = await create({
      id,
      name,
      ingredients,
      database: this._database,
    });

    return recipe;
  }

  @catchPostgresError
  async findAll() {
    this._logger.debug('RecipeRepository#Find all');
    const recipes = await findAll({ database: this._database });

    return recipes;
  }

  @catchPostgresError
  async findById({ id }) {
    this._logger.debug(`RecipeRepository#Find by id ${id}`);
    const recipe = await findById({ database: this._database, id });

    return recipe;
  }

  @catchPostgresError
  async update({ id, name, ingredients }) {
    this._logger.debug(`RecipeRepository#Update by id ${id}`);
    const recipe = await update({
      id,
      name,
      ingredients,
      database: this._database,
    });

    return recipe;
  }
}

export default RecipePGRepository;
