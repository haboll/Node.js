const ApiErrorNames = {
    UNKNOWN_ERROR: {
        code: -1,
        message: '未知错误'
    },
    NOT_LOGIN: {
        code: 100,
        message: '用户未登录'
    },
    TOKEN_EXPIRED: {
        code: 100,
        message: 'Token已失效'
    },
    ID_REQUIRED: {
        code: 101,
        message: 'id is required'
    },
    USER_NOT_EXIST: {
        code: 102,
        message: '用户不存在'
    },
    USER_EXISTED: {
        code: 103,
        message: '用户已存在'
    },
    FAILED: {
        code: 1,
        message: 'failed'
    },
    QA_NOT_EXIST: {
        code: 102,
        message: 'QA不存在'
    },
    QA_EXISTED: {
        code: 103,
        message: 'QA已存在'
    },
    
};

module.exports = {
    ApiErrorNames
}
