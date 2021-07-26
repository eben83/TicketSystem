const initialState = {
    authError: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR': 
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
                console.log(state);
                return state
        case 'SIGNUP_SUCCESS':
            console.log('sign up success')
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('sign up error')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}

export default authReducer