class RecipeRepository {
  create(args) {
    throw new Error('RecipeRepository#create must be implemented');
  }

  destroy(args) {
    throw new Error('RecipeRepository#delete must be implemented');
  }

  findAll(args) {
    throw new Error('RecipeRepository#findAll must be implemented');
  }

  findById({ id }) {
    throw new Error('RecipeRepository#findById must be implemented');
  }

  update(args) {
    throw new Error('RecipeRepository#update must be implemented');
  }
}

export default RecipeRepository;
