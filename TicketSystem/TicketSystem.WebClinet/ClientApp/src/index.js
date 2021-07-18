import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

