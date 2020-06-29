import IngredientRepository from '../../domain/IngredientRepository';

import catchPostgresError from './catchPostgresError';
import create from './create';
import findAll from './findAll';
import findById from './findById';
import update from './update';

class IngredientPGRepository extends IngredientRepository {
  constructor({ logger, database }) {
    super();
    logger.info(`${IngredientRepository.name} constructor`);
    this._logger = logger;
    this._database = database;
  }

  @catchPostgresError
  async create({ id, name }) {
    this._logger.info(`IngredientRepository#Create ${name}`);
    const ingredient = await create({
      id,
      name,
      database: this._database,
    });

    return ingredient;
  }

  @catchPostgresError
  async findAll() {
    this._logger.info('IngredientRepository#Find all');
    const ingredients = await findAll({ database: this._database });

    return ingredients;
  }

  @catchPostgresError
  async findById({ id }) {
    this._logger.info(`IngredientRepository#Find by id ${id}`);
    const ingredient = await findById({ database: this._database, id });

    return ingredient;
  }

  @catchPostgresError
  async update({ id, name }) {
    this._logger.info(`IngredientRepository#Update by id ${id}`);
    const ingredient = await update({
      id,
      name,
      database: this._database,
    });

    return ingredient;
  }
}

export default IngredientPGRepository;
