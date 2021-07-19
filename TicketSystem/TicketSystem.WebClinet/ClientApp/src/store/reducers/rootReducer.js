import authReducer from "./authReducer";
import ticketReducer from "./ticketReducer";
import { combineReducers } from 'redux'
import { firestoreReducer } from "redux-firestore";

const rootReducers = combineReducers ({
    auth: authReducer,
    ticket: ticketReducer,
    firestore: firestoreReducer
})

export default rootReducers