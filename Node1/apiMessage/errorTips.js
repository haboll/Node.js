const ApiErrorNames = {
    UNKNOWN_ERROR: {
        code: -1,
        message: '未知错误'
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
    }
    
};

module.exports = {
    ApiErrorNames
}
