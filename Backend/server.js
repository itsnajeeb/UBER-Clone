
const http = require('http')
const app = require('./app');
const port = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(port, () => {
    console.log(`Server running on PORT ${port}`);

})

// Graceful shutdown on nodemon restart

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated');
    });
});