class IngredientRepository {
  create(args) {
    throw new Error('IngredientRepository#create must be implemented');
  }

  destroy(args) {
    throw new Error('IngredientRepository#delete must be implemented');
  }

  findAll(args) {
    throw new Error('IngredientRepository#findAll must be implemented');
  }

  findById({ id }) {
    throw new Error('IngredientRepository#findById must be implemented');
  }

  update(args) {
    throw new Error('IngredientRepository#update must be implemented');
  }
}

export default IngredientRepository;
