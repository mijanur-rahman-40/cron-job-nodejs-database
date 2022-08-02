const express = require("express");
const app = express();
const cron = require('node-cron');
require('./config/db');

const http = require('http');
const postRouter = require('./routes/postRoute');
const notificationRouter = require('./routes/notificationRoute');
const { postNotifications, sendNotification } = require('./controllers/NotificationController');

const socketController = require('./controllers/SocketController');

// process.setMaxListeners(0);

const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server, {
    cors: {
        // origin: '*',
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

app.set('socketIo', io);


// cron.schedule('* 3 * * * Tuesday', () => {
//   console.log('running a task every 3min');
// });

// corn job run every 2 minutes
cron.schedule('*/2 * * * *', () => {
    postNotifications();
    // sendNotification()
    console.log('running a task every 2 minutes');
});

// cron.schedule('* * * * Sunday', () => {
//   console.log('running a task every second');
// });

// cron.schedule('* * */3 * *', () => {
//     console.log('that says, every minute of every hour on every three days. ');
// });

// cron.schedule('0 0 */3 * *', () => {
//     console.log('Says at 00:00 (midnight) every three days.');
// });

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    response.setHeader(
        'Access-Control-Allow-Methods',
        'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    )
    response.setHeader('Access-Control-Allow-Headers', [
        'Origin',
        'X-Requested-With',
        'Accept',
        'Authorization',
        'Content-Type'
    ])
    next()
});



app.use(express.json());
app.use('/post', postRouter);
app.use('/notification', notificationRouter);

io.on('connection', socketController.joinSocket);


server.listen(5000, () => console.log('App Running on http://localhost:5000'));
