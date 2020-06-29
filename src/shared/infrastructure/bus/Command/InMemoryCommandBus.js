import CommandBus from '../../../domain/bus/Command/CommandBus';
import MessageBus from '../MessageBus/InMemoryMessageBus';

let bus;

class InMemoryCommandBus extends CommandBus {
  constructor() {
    super();
    bus = new MessageBus();
  }

  dispatch(command) {
    try {
      bus.dispatch(command);
    } catch (error) {
      throw error;
    }
  }
}

export default InMemoryCommandBus;
