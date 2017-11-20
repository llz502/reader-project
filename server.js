var http = require('http')
var fs = require('fs')
var url = require('url')

//console.log(Object.keys(http))
var port = process.env.PORT || 9999;

var server = http.createServer(function (request, response) {

    var temp = url.parse(request.url, true)
    var path = temp.pathname
    var query = temp.query
    var method = request.method

    //从这里开始看，上面不要看     
    if (method === 'GET') {
        if (path === '/') {  // 如果用户请求的是 / 路径
            var string = fs.readFileSync('./index.html')
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end(string)
        } else if (path === '/css/main.css') {
            var string = fs.readFileSync('./css/main.css')
            response.setHeader('Content-Type', 'text/css')
            response.end(string)
        } else if (path === '/css/iconfont.css') {
            var string = fs.readFileSync('./css/iconfont.css')
            response.setHeader('Content-Type', 'text/css')
            response.end(string)
        } else if (path === '/main.js') {
            var string = fs.readFileSync('./main.js')
            response.setHeader('Content-Type', 'application/javascript')
            response.end(string)
        } else if (path === '/data/chapter.json') {
            var string = fs.readFileSync('data/chapter.json')
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end(string)
        } else if (path === '/data/data1.json') {
            var string = fs.readFileSync('data/data1.json')
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end(string)
        } else if (path === '/data/data2.json') {
            var string = fs.readFileSync('data/data2.json')
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end(string)
        } else if (path === '/data/data3.json') {
            var string = fs.readFileSync('data/data3.json')
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end(string)
        } else if (path === '/data/data4.json') {
            var string = fs.readFileSync('data/data4.json')
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end(string)
        } else {
            response.statusCode = 404
            response.setHeader('Content-Type', 'text/html;charset=utf-8')
            response.end('找不到对应的路径，你需要自行修改 index.js')
        }
    }
    // 代码结束，下面不要看
    console.log(method + ' ' + request.url)
})

server.listen(port)
console.log('监听 ' + port + ' 成功，请用在空中转体720度然后用电饭煲打开 http://localhost:' + port)