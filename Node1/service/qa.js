const { query, createTable } = require('../lib/mysql.js');

let qas = `create table if not exists qas(
     id INT AUTO_INCREMENT NOT NULL COMMENT 'ID',
     name VARCHAR(255) NOT NULL COMMENT '名称',
     category INT NOT NULL COMMENT '分类',
     level INT NOT NULL COMMENT '困难程度',
     question VARCHAR(255) NOT NULL COMMENT '问题',
     answer VARCHAR(255) NOT NULL COMMENT '答案',
     point VARCHAR(255) COMMENT '易错点',
     PRIMARY KEY ( id )
     )`;

createTable(qas);

// 根据id获取用户信息
exports.getQAById = id => {
    let _sql = `select * from qas where id=${id}`;
    return query(_sql);
};

// 添加用户详细信息
exports.insertQAData = data => {
    let _sql = `insert into qas (name, category, level, question, answer, point) values ("${data.name}", ${data.category}, ${data.level}, "${data.question}", "${data.answer}", "${data.point}")`;
    return query(_sql);
};

exports.updateQAData = data => {
    let _sql = `update qas set name="${data.name}",category=${data.category},level=${data.level},question="${data.question}",answer="${data.answer}",point="${data.point}" where id=${data.id}`;
    return query(_sql);
};

exports.deleteQAData = id => {
    let _sql = `delete from qas where id=${id}`;
    return query(_sql);
};

exports.getQAList = data => {
    let offsetNum = data.pageSize * (data.pageNum - 1);
    let _sql = `select * from qas limit ${data.pageSize} offset ${offsetNum}`;
    return query(_sql);
};
