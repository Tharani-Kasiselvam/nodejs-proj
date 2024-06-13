//import http module
const http = require('http')

//create server object
const server = http.createServer((request,response) => {
    response.end('Hello Welcome!!!')
})

//start the server to listen to request on port 3001 [customized]
server.listen(3001, '127.0.0.1', () => {
    console.log("Server running on http://127.0.0.1:3001")
})