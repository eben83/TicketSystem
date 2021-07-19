import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebaseConfig from "./config/firebaseConfig";
import firebase from "firebase/app";

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(firebase, firebaseConfig)
    )
);

const config = {firebaseConfig}

const Props = {
    firebase,
    config: firebaseConfig,
    dispatch: store.dispatch,
    createFirestoreInstance
}

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...Props}>
            <App />
        </ReactReduxFirebaseProvider>
    </Provider>
  </BrowserRouter>,
  rootElement);

registerServiceWorker();

