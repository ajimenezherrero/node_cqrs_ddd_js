class Ingredient {
  constructor({ id, name } = {}) {
    this._id = id;
    this._name = name;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  updateName(name) {
    this._name = name;
  }

  responseView() {
    return {
      id: this._id,
      name: this._name,
    };
  }
}

export default Ingredient;
