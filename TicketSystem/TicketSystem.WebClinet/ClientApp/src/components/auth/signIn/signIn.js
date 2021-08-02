import React, {Component} from 'react';
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/authActions'
import { Redirect } from "react-router-dom";

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
        this.props.signIn(this.state)
        // console.log(this.state)
    }
    
    render() {
        const { authError, auth } = this.props
        
        if(auth.uid) return <Redirect to='/' />
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
                            <div className='mt-3 d-flex justify-content-center flex-column'>
                                <button className='btn badge-primary'>Login</button>
                                <div className='text-center text-danger pt-3'>
                                    {authError ? <div className='h1 text-danger'>{authError}</div> : null}
                                </div>
                            </div>
                        </div>
                    </form>
                    <div>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex flex-column'>
                                <div className='d-flex'>
                                    <p className='mr-1'>User Name:</p>
                                    <p>john@test.com</p>
                                </div>
                                <div className='d-flex'>
                                    <p className='mr-1'>Password:</p>
                                    <p>test1234</p>
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='d-flex'>
                                    <p className='mr-1'>User Name:</p>
                                    <p>smith@test.com</p>
                                </div>
                                <div className='d-flex'>
                                    <p className='mr-1'>Password:</p>
                                    <p>test1234</p>
                                </div>
                            </div>
                            <div className='d-flex flex-column'>
                                <div className='d-flex'>
                                    <p className='mr-1'>User Name:</p>
                                    <p>paul@account.com</p>
                                </div>
                                <div className='d-flex'>
                                    <p className='mr-1'>Password:</p>
                                    <p>test1234</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn : (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (SignIn);