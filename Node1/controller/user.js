

const controller = {
    getUserInfo: async ctx => {
        ctx.body = {
            name: "test",
            age: 16
        }
    },
    addUser: async ctx => {
        console.log(ctx.req.qurey)
    }
}
module.exports = controller