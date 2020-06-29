class DatabaseError extends Error {
  constructor(message, options = {}) {
    super(`Database Error: ${message}`);
    this.name = 'DatabaseError';
    this.options = options;
  }

  get statusCode() {
    return 500;
  }
}

export default DatabaseError;
