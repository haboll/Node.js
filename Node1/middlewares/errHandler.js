const { ApiError } = require('../apiMessage/ApiMessge');

const errorHandler = async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        // api 抛出的错误
        if (error instanceof ApiError) {
            ctx.body = {
                code: error.code,
                message: error.message
            };
        }
        throw error;
    }
};

module.exports = errorHandler;