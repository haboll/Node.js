const qaMySql = require('../service/qa.js');
const {
    ApiError,
    ApiErrorNames,
    ApiTip,
    ApiTipNames
} = require('../apiMessage/ApiMessge');


const getQADataById = async id => {
    if (!id) return false;
    let QAData = await qaMySql.getQAById(id);
    if(QAData && QAData.length){
        return QAData;
    }
    ctx.body = new ApiError(ApiErrorNames.QA_NOT_EXIST);
    return false;
    
};

const getQAData = async ctx => {
    let id = ctx.query.id;
    let QAData = await getQADataById(id);
    if (QAData) {
        ctx.body = QAData[0];
    }
};
const addQAData = async ctx => {
    let insertQAData = ctx.request.body;
    let id = insertQAData.id;
    let QAData = await getQADataById(id);
    if (QAData) {
        ctx.body = new ApiError(ApiErrorNames.QA_EXISTED);
    } else {
        let result = await qaMySql.insertQAData(insertQAData);
        if (!result) {
            ctx.body = new ApiError(ApiErrorNames.FAILED);
        }
    }
};

const updateQAData = async ctx => {
    let updateData = ctx.request.body;
    let id = updateData.id;
    let QAData = await getQADataById(id);
    if (QAData) {
        let data = QAData[0];
        data = Object.assign(data, updateData);
        let result = await qaMySql.updateQAData(data);
        if (!result) {
            ctx.body = new ApiError(ApiErrorNames.FAILED);
        }
    }
};

// 物理删除， 一般是逻辑删除
const deleteQAData = async ctx => {
    let deleteData = ctx.request.body;
    let id = deleteData.id;
    let QAData = await getQADataById(id);
    if (QAData) {
        let result = await qaMySql.deleteQAData(id);
        if (!result) {
            ctx.body = new ApiError(ApiErrorNames.FAILED);
        }
    }   
};

const getQAList = async ctx => {
    let pageData = {
        pageSize: ctx.query.pageSize,
        pageNum: ctx.query.pageNum
    };
    let result = await qaMySql.getQAList(pageData);
    ctx.body = result;
};

module.exports = {
    getQADataById,
    getQAData,
    addQAData,
    updateQAData,
    deleteQAData,
    getQAList
};
