
const config = require("./config/config.js")
const Koa = require("koa")

const router  = require("./router/index.js")

const app =  new Koa();

app.use(router.routes())

app.use(router.allowedMethods())

app.listen(config.port)

// app.use(async ctx => {
//     ctx.body = 'Hello World';
//   });

console.log(`Server running at http://127.0.0.1:${config.port}/`);
