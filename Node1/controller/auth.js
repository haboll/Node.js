const { getUserData } = require('./user');
const jwt = require('jsonwebtoken');
const {expiresIn, secret} = require('../config/jwtConfig');

const controller = {
    login: async ctx => {
        let data = ctx.request.body;
        const { userId, password } = data;
        let userData = await getUserData(userId);
        // 用户存在
        if (userData && userData.length) {
            // 密码正确
            let user = userData[0];
            if (user.password === password) {
                let token = jwt.sign(
                    {
                        id: userId,
                        name: user.name,
                        phone: user.phone
                    },
                    secret,
                    {
                        expiresIn
                    }
                );
                ctx.body = {
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                    petName: user.petName,
                    token
                };
            }
        } else {
        }
    }
};
module.exports = controller;
