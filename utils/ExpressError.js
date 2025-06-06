class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.isOperational = true; 
    Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ExpressError;