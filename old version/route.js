var koa = require('koa');
var router = require('koa-router');
var app = new koa();

var _ = new router(); //Instantiate the router

_.get('/hello', getMessage);
_.post('/hello', postMessage);
_.all('/test', allMessage);
_.get('/:id', sendID);

function *getMessage() {
	this.body = "Hello world!";
};
function *postMessage() {
   this.body = "You just called the post method at '/hello'!\n";
};

function *allMessage(){
   this.body = "All HTTP calls regardless of the verb will get this response";
};

function *sendID() {
   this.body = 'The id you specified is ' + this.params.id;
}
app.use(_.routes()); //Use the routes defined using the router
console.log(_.routes());
app.listen(3000);