const { ApiErrorNames } = require('./errorTips');

const { ApiTipNames } = require('./normalTips');

class ApiError extends Error {
    constructor(err, data) {
        super();
        const errorInfo = err || ApiErrorNames['UNKNOWN_ERROR'];
        this.code = errorInfo.code;
        this.message = errorInfo.message;
        if (data) {
            this.data = data;
        }
    }
}

class ApiTip {
    constructor(data, tip) {
        const tipInfo = tip || ApiTipNames['DEAFAULT_TIP'];
        this.code = tipInfo.code;
        this.message = tipInfo.message;
        if (data) {
            this.data = data;
        }
    }
}

module.exports = {
    ApiErrorNames,
    ApiTipNames,
    ApiError,
    ApiTip
};
