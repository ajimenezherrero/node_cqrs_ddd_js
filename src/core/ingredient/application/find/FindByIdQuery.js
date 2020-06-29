class FindByIdQuery {
  constructor({ id }) {
    this._name = FindByIdQuery.name;
    this._id = id;
  }

  get name() {
    return this._name;
  }

  get id() {
    return this._id;
  }
}

export default FindByIdQuery;
