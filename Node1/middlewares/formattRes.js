const {
    ApiError,
    ApiErrorNames,
    ApiTip,
    ApiTipNames
} = require('../apiMessage/ApiMessge');

//格式化返回结果
const formattFun = async ctx => {
    console.log(ctx.body);
    let body = ctx.body;
    if (!body) {
        ctx.body = new ApiTip();
    }
    // 继承自 ApiError
    else if (body instanceof ApiError) {
        return;
    } else if (body instanceof ApiTip) {
        return;
    } else {
        ctx.body = new ApiTip(ctx.body);
    }
};

const formattRes = function (pattern) {
    return async function (ctx, next) {
        var reg = new RegExp(pattern);
        await next();
        //通过正则的url进行格式化处理
        console.log(ctx.originalUrl);
        if (reg.test(ctx.originalUrl)) {
            formattFun(ctx);
        }
    };
};

module.exports = formattRes;
