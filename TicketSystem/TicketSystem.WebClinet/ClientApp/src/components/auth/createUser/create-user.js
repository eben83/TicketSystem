import React, {Component} from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router-dom'

class CreateUser extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        department: ''
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // this.props.signIn(this.state)
        console.log(this.state)
    }

    render() {
        const { auth } = this.props
        if(!auth.uid) return <Redirect to='/' />
        return (
            <>
                <div className='sign-in p-4'>
                    <form onSubmit={this.handleSubmit} className='d-flex justify-content-center align-items-center'>
                        <div>
                            <h1>Create User</h1>
                            <div className='d-flex flex-column mt-5'>
                                <input
                                    type='text'
                                    id='firstName'
                                    placeholder='First Name'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='d-flex flex-column mt-5'>
                                <input
                                    type='text'
                                    id='lastName'
                                    placeholder='Surname'
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className='d-flex flex-column mt-5'>
                                <input
                                    type='text'
                                    id='department'
                                    placeholder='Department'
                                    onChange={this.handleChange}
                                />
                            </div>
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
                                <button className='btn badge-primary'>Create</button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps) (CreateUser);