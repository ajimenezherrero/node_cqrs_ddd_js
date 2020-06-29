class IngredientNotFoundError extends Error {
  constructor(options = {}) {
    super('Ingredient not found');
    this.options = options;
  }

  get statusCode() {
    return 404;
  }
}

export default IngredientNotFoundError;
