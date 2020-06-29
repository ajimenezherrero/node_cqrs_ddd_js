class CommandBus {
  dispatch(args) {
    throw new Error('CommandBus#dispatch must be implemented');
  }
}

export default CommandBus;
