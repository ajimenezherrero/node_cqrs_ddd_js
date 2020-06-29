class FindByIdQueryHandler {
  constructor({ useCase }) {
    this._useCase = useCase;
  }

  async execute(FindByIdQuery) {
    return this._useCase.execute({ id: FindByIdQuery.id });
  }
}

export default FindByIdQueryHandler;
