const config = require('./config/config.js');
const Koa = require('koa');

// const onerror = require('koa-onerror');

// const logger = require('koa-logger');

const bodyparser = require('koa-bodyparser');

const erroHandler = require('./middlewares/errHandler');

const formattRes = require('./middlewares/formattRes');

const checkLogin = require('./middlewares/checkLogin');

const router = require('./router/index.js');

const app = new Koa();

// onerror(app);

// app.use(logger())

app.use(bodyparser());

//app.use(erroHandler());

app.use(formattRes('^/api'));

app.use(checkLogin());

app.use(router.routes());

app.use(router.allowedMethods());

app.listen(config.port);

console.log(`Server running at http://127.0.0.1:${config.port}/`);
