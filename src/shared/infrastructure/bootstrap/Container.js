import Logger from '../logger/Logger';
import Database from '../database/Postgresql';
import CommandBus from '../bus/Command/InMemoryCommandBus';
import QueryBus from '../bus/Query/InMemoryQueryBus';

export default class Container {
  constructor({ config } = {}) {
    this._config = config;
    this._instances = new Map();
  }

  getInstance({ key }) {
    if (typeof this._instances.get(key) === 'undefined') {
      try {
        this._instances.set(key, this['_build' + key]());
      } catch (e) {
        throw new Error(`Error creating instance: ${key}: ` + e.message);
      }
    }

    return this._instances.get(key);
  }

  _buildLogger() {
    return new Logger({ config: this._config });
  }

  _buildDatabase() {
    return new Database({
      config: this._config.db,
      logger: this.getInstance({ key: 'Logger' }),
    });
  }

  _buildCommandBus() {
    return new CommandBus();
  }

  _buildQueryBus() {
    return new QueryBus();
  }
}
