class Recipe {
  constructor({ id, name, ingredients } = {}) {
    this._id = id;
    this._name = name;
    this._ingredients = ingredients;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get ingredients() {
    return this._ingredients;
  }

  updateName(name) {
    this._name = name;
  }

  updateingredients(ingredients) {
    this._ingredients = ingredients;
  }

  responseView() {
    return {
      id: this._id,
      name: this._name,
      ingredients: this._ingredients,
    };
  }
}

export default Recipe;
