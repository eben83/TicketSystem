export const createTicket = (ticket) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        dispatch({type: 'CREATE_TICKET', ticket})
    }
}