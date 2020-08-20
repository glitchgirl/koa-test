const koa = require('koa'),
router = require('koa-router')();

var app = new koa();

router.get('/', function(ctx, next) {
 ctx.body = "Hello"
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
console.log("Listening on port 3000");