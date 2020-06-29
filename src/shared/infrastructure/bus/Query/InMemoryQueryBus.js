import QueryBus from '../../../domain/bus/Query/QueryBus';
import MessageBus from '../MessageBus/InMemoryMessageBus';

let bus;

class InMemoryQueryBus extends QueryBus {
  constructor() {
    super();
    bus = new MessageBus();
  }

  bindHandler(handler, message) {
    bus.bindHandler(handler, message);
  }

  async ask(query) {
    try {
      const response = await bus.dispatch(query);

      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default InMemoryQueryBus;
