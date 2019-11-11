const { version } = require("./package.json");
const Koa = require("koa");
const logger = require("koa-logger");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
app.use(logger());

router.get("/", (ctx, next) => {
  ctx.body = "Welcome to the app!";
});

router.get("/health-check", (ctx, next) => {
  ctx.body = { version };
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);
