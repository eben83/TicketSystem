const initialState = {
    tickets: [
        {id: '1', firstName: 'eben', lastName: 'burger', email: 'test@test.co', title: 'IT Issue', department: 'IT', status: 'in progress',comment: 'blah blah blah'},
        {id: '2', firstName: 'bob', lastName: 'smith', email: 'test@test.co', title: 'Account dispute', department: 'Account', status: 'in progress',comment: 'blah blah blah'},
        {id: '3',  firstName: 'paul', lastName: 'blogs', email: 'test@test.co', title: 'Sales Info', department: 'Sales', status: 'in progress',comments: 'blah blah blah'},
        {id: '4',  firstName: 'eben', lastName: 'burger', email: 'test@test.co', title: 'IT Issue', department: 'IT', status: 'in progress',comment: 'blah blah blah'},
        {id: '5',  firstName: 'bob', lastName: 'smith', email: 'test@test.co', title: 'Account dispute', department: 'Account', status: 'in progress',comment: 'blah blah blah'},
        {id: '6',  firstName: 'paul', lastName: 'blogs', email: 'test@test.co', title: 'Sales Info', department: 'Sales', status: 'in progress',comment: 'blah blah blah'},
    ]
}

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TICKET':
            console.log('Ticket created', action.ticket)
    }    
    return state
}

export default ticketReducer