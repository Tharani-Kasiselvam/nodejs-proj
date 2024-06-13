//declaring an Array object to display in json data format
const notes = [
    {
        id : 1,
        content : "Testing note1",
        important : true
    },
    {
        id : 2,
        content : "Testing note2",
        important : false
    }
]

//import http module
const http = require('http')

//create server object
const server = http.createServer((request,response) => {
    //this is to set Header object and it will be attached in the request/response
    response.writeHead(200,{'Content-type' : 'text/plain'})
    response.end(JSON.stringify(notes))
})

//start the server to listen to request on port 3001 [customized]
    // server.listen(3001, '127.0.0.1', () => {
    
        //we can also mention without the default ip as below:
    server.listen(3001, () => {
    console.log("Server running on http://127.0.0.1:3001")
})