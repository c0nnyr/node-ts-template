import Koa from 'koa';
import Router from 'koa-router';

const app:Koa = new Koa();
const router = new Router();

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!2';
});

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');