const http = require('http')
const app = require('./app')
const server = http.createServer(app)

const hostname = 'localhost'
const port = 8000
server.listen(port, console.log(`Hogwarts Express running on the server : http://${hostname}:${port}/`))
//McrfG78gDhvDAVFv