const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const koaBody = require('koa-body');

const app = new Koa();

const router = new Router();

router.get('/', ctx => {
  ctx.body = {
    msg: 'ok',
    data: 'index',
    status: 200
  };
});
router.get('/list', ctx => {
  ctx.body = {
    msg: 'ok',
    data: ctx.query,
    status: 200
  };
});

router.post('/login', ctx => {
  ctx.body = {
    msg: 'ok',
    status: 200
  };
});

router.get('/params', ctx => {
  ctx.body = ctx.request.query;
});

router.post('/post', ctx => {
  ctx.body = ctx.request.body;
});

app.use(koaBody());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
