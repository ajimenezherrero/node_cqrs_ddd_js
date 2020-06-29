import MessageBusError from './MessageBusError';

class InMemoryMessageBus {
  constructor() {
    this._bus = new Map();
  }

  bindHandler(handler, message) {
    const messageName = message.name;

    if (this._bus.has(messageName)) {
      throw new MessageBusError(`Can not overwrite exists binding for ${messageName}.`);
    }

    this._bus.set(messageName, handler);
  }

  dispatch(message) {
    console.log('InMemoryMessageBus -> dispatch -> message', message);
    const messageName = message.name;
    const handler = this._bus.get(messageName);

    if (!handler) {
      return Promise.reject(new MessageBusError(`Can not find handler for ${messageName}.`));
    }

    return handler.execute(message);
  }
}

export default InMemoryMessageBus;
