const { query, createTable } = require('../lib/mysql.js');

let users = `create table if not exists users(
     id INT NOT NULL COMMENT 'ID',
     phone INT NOT NULL COMMENT '手机',
     name VARCHAR(100) NOT NULL COMMENT '用户名',
     age INT NOT NULL COMMENT '年龄',
     sex INT NOT NULL COMMENT '性别',
     address VARCHAR(100) NOT NULL COMMENT '地址',
     email VARCHAR(100) NOT NULL COMMENT '邮箱',
     PRIMARY KEY ( id )
     )`;

createTable(users);

// 根据id获取用户信息
exports.getUserDataById = id => {
    let _sql = `select * from users where id=${id}`;
    return query(_sql);
};
// 根据phone获取用户信息
exports.getUserDataByPhone = phone => {
    let _sql = `select * from users where phone=${phone}`;
    return query(_sql);
};

// 添加用户详细信息
exports.insertUserData = data => {
    let _sql = `insert into users (id, phone, name, age, sex, address, email) values (${data.id}, ${data.phone}, "${data.name}", ${data.age}, ${data.sex}, "${data.address}", "${data.email}")`;
    return query(_sql);
};

exports.updateUserData = data => {
    let _sql = `update users set phone=${data.phone},name="${data.name}",age=${data.age},sex=${data.sex},address="${data.address}",email="${data.email}" where id=${data.id}`;
    return query(_sql);
}

exports.deleteUserData = id => {
    let _sql = `delete from users where id=${id}`;
    return query(_sql);
}

exports.getUserList = (data) => {
    let offsetNum = data.pageSize * (data.pageNum - 1);
    let _sql = `select * from users limit ${data.pageSize} offset ${offsetNum}`;
    return query(_sql);
}