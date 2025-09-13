function errorHandler(statusCode, message) {
  const error = new Error();
  error.status = statusCode;
  error.message = message;
  error.success = false
  return error;
}

export default errorHandler;
