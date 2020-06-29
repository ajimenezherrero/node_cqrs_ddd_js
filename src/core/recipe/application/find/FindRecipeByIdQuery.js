class FindRecipeByIdQuery {
  constructor({ id }) {
    this._name = FindRecipeByIdQuery.name;
    this._id = id;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }
}

export default FindRecipeByIdQuery;
