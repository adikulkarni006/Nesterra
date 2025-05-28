class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
         this.isOperational = true; // This helps differentiate between operational errors and programming bugs.
    Error.captureStackTrace(this, this.constructor); //ex
    }
}

module.exports = ExpressError;