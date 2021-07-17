import React, {Component} from 'react';

import './signIn.xs.css'
import './signIn.sm.css'
import './signIn.md.css'
import './signIn.lg.css'
import './SignIn.xl.css'

class SignIn extends Component {
    
    state = {
        email: '',
        password: ''
    }
    
    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }
    
    render() {
        return (
            <>
                <div className='sign-in p-4'>
                    <form onSubmit={this.handleSubmit} className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h1>Sign In</h1>
                            <div className='d-flex flex-column mt-5'>
                                <input
                                    type='email'
                                    id='email'
                                    placeholder='Email'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='mt-3'>
                                <input
                                    type='password'
                                    id='password'
                                    placeholder='password'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='mt-3 d-flex justify-content-center'>
                                <button className='btn badge-primary'>Login</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default SignIn;