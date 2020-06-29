class RecipeNotFoundError extends Error {
  constructor(options = {}) {
    super('Recipe not found');
    this.options = options;
  }

  get statusCode() {
    return 404;
  }
}

export default RecipeNotFoundError;
