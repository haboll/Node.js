const userMySql = require('../service/user.js');
const {
    ApiError,
    ApiErrorNames,
    ApiTip,
    ApiTipNames
} = require('../apiMessage/ApiMessge');

const getUserData = async id => {
    if (!id) return []
    let userData = await userMySql.getUserDataById(id);
    return userData;
};

const getUserInfo = async ctx => {
    let id = ctx.query.id;
    let userData = await getUserData(id);
    if (userData.length) {
        ctx.body = userData[0];
    } else {
        ctx.body = new ApiError(ApiErrorNames.USER_NOT_EXIST);
    }
};
const addUserInfo = async ctx => {
    let insertData = ctx.request.body;
    let id = insertData.id;
    let userData = await getUserData(id);
    if (userData.length) {
        ctx.body = new ApiError(ApiErrorNames.USER_EXISTED);;
    } else {
        let result = await userMySql.insertUserData(insertData);
        if (!result) {
            ctx.body = new ApiError(ApiErrorNames.FAILED);
        }
    }
};

const updateUserInfo = async ctx => {
    let updateData = ctx.request.body;
    let id = updateData.id;
    let userData = await getUserData(id);
    if (!userData.length) {
        ctx.body = new ApiError(ApiErrorNames.USER_NOT_EXIST);
    } else {
        let result = await userMySql.updateUserData(updateData);
        if (!result) {
            ctx.body = new ApiError(ApiErrorNames.FAILED);
        }
    }
};

// 物理删除， 一般是逻辑删除
const deleteUserInfo = async ctx => {
    let deleteData = ctx.request.body;
    let id = deleteData.id;
    let userData = await getUserData(id);
    if (!userData.length) {
        throw new ApiError(ApiErrorNames.USER_NOT_EXIST);
    } else {
        let result = await userMySql.deleteUserData(id);
        if (!result) {
            ctx.body = new ApiError(ApiErrorNames.FAILED)
        }
    }
};

const getUserList = async (ctx, next) => {
    let pageData = {
        pageSize: ctx.query.pageSize,
        pageNum: ctx.query.pageNum
    };
    let result = await userMySql.getUserList(pageData);
    ctx.body = result;
    await next();
};

module.exports = {
    getUserData,
    getUserInfo,
    addUserInfo,
    updateUserInfo,
    deleteUserInfo,
    getUserList
};
