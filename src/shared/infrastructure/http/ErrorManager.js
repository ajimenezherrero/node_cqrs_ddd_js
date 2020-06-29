class ErrorManager {
  constructor({ logger }) {
    this._logger = logger;
  }

  get errorManagement() {
    return (err, req, res, next) => {
      const { statusCode = 500, message = '' } = err;

      this._logger.error(message, err, req);

      res.status(statusCode).json({ error: message });
      next();
    };
  }
}

export default ErrorManager;
