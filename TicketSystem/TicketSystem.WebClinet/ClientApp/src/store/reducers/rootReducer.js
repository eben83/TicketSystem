import authReducer from "./authReducer";
import ticketReducer from "./ticketReducer";
import { combineReducers } from 'redux'

const rootReducers = combineReducers ({
    auth: authReducer,
    ticket: ticketReducer
})

export default rootReducers