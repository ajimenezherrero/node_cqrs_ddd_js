class FindAllUseCase {
  constructor({ ingredientFactory, ingredientRepository, logger }) {
    this._ingredientFactory = ingredientFactory;
    this._ingredientRepository = ingredientRepository;
    this._logger = logger;
  }

  async execute() {
    this._logger.debug('FindAllUseCase execute');
    const rawingredients = await this._ingredientRepository.findAll();
    const ingredients = rawingredients.map(rawingredient =>
      this._ingredientFactory.create(rawingredient).responseView(),
    );

    return {
      ingredients,
    };
  }
}

export default FindAllUseCase;
