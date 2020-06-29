class MessageBusError extends Error {
  constructor(message, options = {}) {
    super(`Message Bus Error: ${message}`);
    this.name = 'MessageBusError';
    this.options = options;
  }

  get statusCode() {
    return 500;
  }
}

export default MessageBusError;
