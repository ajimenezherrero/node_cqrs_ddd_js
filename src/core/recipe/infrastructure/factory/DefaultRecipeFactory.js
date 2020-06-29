import Recipe from '../../domain/Recipe';
import RecipeFactory from '../../domain/RecipeFactory';

class DefaultRecipeFactory extends RecipeFactory {
  create(recipe) {
    try {
      return new Recipe(recipe);
    } catch (error) {
      throw new Error('Factory Error creating Recipe');
    }
  }
}

export default DefaultRecipeFactory;
