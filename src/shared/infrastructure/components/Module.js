export default class Module {
  constructor() {
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
}
