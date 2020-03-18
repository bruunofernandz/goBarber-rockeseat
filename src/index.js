const server = require('./server')

server.listen(process.env.SERVER_PORT || 3000, (req, res) => {
  console.log('Servidor Online !')
})
