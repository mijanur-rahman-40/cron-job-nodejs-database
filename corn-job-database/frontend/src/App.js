import React from 'react';
import './App.css';
import { io } from 'socket.io-client';
import Notification from './containers/Home/Notifications';
import PostNotification from './containers/Home/PostNotification';
import Nav from './components/Nav';

const ENDPOINT = 'http://localhost:5000';

function App() {

    const name = 'None';
    const room = '12345';

    React.useEffect(() => {
        const socket = io(ENDPOINT, {
            withCredentials: true,
            extraHeaders: {
                "my-custom-header": "any value"
            }
        });

        socket.on("connection", (socket) => {
            console.log(socket.id);
        });

        if (name && room) {
            socket.emit('join', { name, room }, (error) => {
                if (error) alert(error);
            });
        }

        socket.on('message', (message, callback) => {
            console.log(message);
        });

        socket.on("disconnect", () => {
            console.log(socket.id); // undefined
        });

    }, [name, room]);


    return <React.Fragment>
        <Nav />
        <div className='debug-screens bg-slate-100 min-h-screen'>
            <div className='flex w-full pt-7 md:pt-16 justify-center items-center lg:items-start flex-col lg:flex-row'>
                <PostNotification />
                <Notification />
            </div>
        </div>
    </React.Fragment>
}

export default App;