export const createTicket = (ticket) => {
    return (dispatch, getState) => {
        dispatch({type: 'CREATE_TICKET', ticket})
    }
}