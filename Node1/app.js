const config = require('./config/config.js');
const Koa = require('koa');

const onerror = require('koa-onerror');

const logger = require('koa-logger');

const bodyparser = require('koa-bodyparser');

const erroHandler = require('./middlewares/errHandler')

const formattRes = require('./middlewares/formattRes');

const router = require('./router/index.js');

const app = new Koa();

onerror(app);

app.use(bodyparser());

//app.use(erroHandler());

app.use(formattRes('^/api'));

app.use(router.routes()).use(router.allowedMethods());

app.use(logger())

app.listen(config.port);

console.log(`Server running at http://127.0.0.1:${config.port}/`);
