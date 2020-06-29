import Ingredient from '../../domain/Ingredient';
import IngredientFactory from '../../domain/IngredientFactory';

class DefaultIngredientFactory extends IngredientFactory {
  create(ingredient) {
    try {
      return new Ingredient(ingredient);
    } catch (error) {
      throw new Error('Factory Error creating Ingredient');
    }
  }
}

export default DefaultIngredientFactory;
