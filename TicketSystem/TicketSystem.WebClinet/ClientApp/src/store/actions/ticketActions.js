export const createTicket = (ticket) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tickets').add({
            ...ticket,
            authorFirstName: 'Eben',
            authorLastName: 'Burger',
            authorId: '1234',
            createAt: new Date()
        }) .then (() => {
            dispatch({type: 'CREATE_TICKET', ticket})
        }) .catch ((err) => {
            dispatch({type: 'TICKET_CREATE_ERROR', err})
        })
    }
}