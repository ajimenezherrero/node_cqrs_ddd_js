import IngredientFinder from '../find/IngredientFinder';
import IngredientStatus from '../../domain/IngredientStatus';

class DestroyByIdUseCase {
  constructor({ ingredientFactory, ingredientRepository, logger }) {
    this._ingredientFinder = new IngredientFinder({ ingredientFactory, ingredientRepository, logger });
    this._ingredientRepository = ingredientRepository;
    this._logger = logger;
  }

  async execute({ id }) {
    this._logger.debug('DestroyByIdUseCase execute');
    const ingredient = await this._ingredientFinder.findById({ id });

    ingredient.updateStatus(IngredientStatus.disabled);

    await this._ingredientRepository.update(ingredient);

    return id;
  }
}

export default DestroyByIdUseCase;
