export const createTicket = (ticket) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid
        firestore.collection('tickets').add({
            ...ticket,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createAt: new Date()
        }) .then (() => {
            dispatch({type: 'CREATE_TICKET', ticket})
        }) .catch ((err) => {
            dispatch({type: 'TICKET_CREATE_ERROR', err})
        })
    }
}