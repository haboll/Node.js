

const controller = {
    getUserInfo: async ctx => {
        ctx.body = {
            name: "test",
            age: 16
        }
    }
}
module.exports = controller