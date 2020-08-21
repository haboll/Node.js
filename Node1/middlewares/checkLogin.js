const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwtConfig');
const { ApiError, ApiErrorNames } = require('../apiMessage/ApiMessge');

const NOT_NEED_LOGIN_API = ['^/api/login', '^/api/addUserInfo'];

const checkLogin = function () {
    return async (ctx, next) => {
        let isNotNeedLogin = NOT_NEED_LOGIN_API.some(api => {
            var reg = new RegExp(api);
            let url = ctx.originalUrl;
            return reg.test(url);
        });
        // 不需要校验登录
        if (true || isNotNeedLogin) {
            await next();
        } else {
            let token = ctx.headers.authorization;
            if (token) {
                let isExpired = false;
                try {
                    jwt.verify(token, secret);
                } catch (error) {
                    isExpired = true;
                }
                if (isExpired) {
                    ctx.body = new ApiError(ApiErrorNames.TOKEN_EXPIRED);
                } else {
                    await next();
                }
            } else {
                ctx.body = new ApiError(ApiErrorNames.NOT_LOGIN);
            }
        }
    };
};
module.exports = checkLogin;
