import React from 'react';
import './App.css';
import { io } from 'socket.io-client';
import { Home, Services, Posts } from './containers';
import Nav from './components/Nav';
// import { subscribeUser } from './subscription';
// import { unregister } from './serviceWorker';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

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
            {/* <header className="App-header">
                <button onClick={subscribeUser}>Click Here</button>
                <button onClick={e => unregister()} className='mx-2'>Unregister</button>
            </header> */}
            <div className='flex w-full pt-7 md:pt-16 justify-center items-center lg:items-start flex-col lg:flex-row'>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/posts" element={<Posts />} />
                    <Route exact path="/services" element={<Services />} />
                </Routes>
            </div>
        </div>
    </React.Fragment>
}

export default App;