import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { subscribeUser } from './subscription';

const container = document.getElementById('root');
const root = createRoot(container);

const app = <BrowserRouter>
  <App />
</BrowserRouter>

root.render(app);
serviceWorker.register();
// subscribeUser();