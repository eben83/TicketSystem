const initialState = {
    tickets: [
        {id: '1', title: 'IT Issue', comment: 'blah blah blah'},
        {id: '2', title: 'Sales Request', comment: 'blah blah blah'},
        {id: '3', title: 'Account Dispute', comment: 'blah blah blah'},
    ]
}

const ticketReducer = (state = initialState, action) => {
    return state
}

export default ticketReducer