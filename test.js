var app = require('http').createServer(handler)
var io = require('socket.io')(app);

app.listen(5186);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
});

function handler(req,res){
  res.send('hello');
}
