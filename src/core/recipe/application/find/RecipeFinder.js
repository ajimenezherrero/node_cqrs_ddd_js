import DomainRecipeFinder from '../../domain/RecipeFinder';

class RecipeFinder {
  constructor({ recipeFactory, recipeRepository, logger }) {
    this._finder = new DomainRecipeFinder({
      recipeFactory,
      recipeRepository,
      logger,
    });
  }

  findById({ id }) {
    return this._finder.findById({ id });
  }
}

export default RecipeFinder;
