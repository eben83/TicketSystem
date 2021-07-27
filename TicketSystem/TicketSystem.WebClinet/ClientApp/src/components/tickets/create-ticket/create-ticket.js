import React, {Component} from 'react';
import { connect } from "react-redux";
import { createTicket } from "../../../store/actions/ticketActions";
import { Redirect } from "react-router-dom"

import './create-ticket.xs.css'
import './create-ticket.sm.css'
import './create-ticket.md.css'
import './create-ticket.lg.css'
import './create-ticket.xl.css'
import {compose} from "redux";
import {firestoreConnect} from "react-redux-firebase";

class CreateTicket extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        status: '',
        comment: '',
        ticketNumber: ''
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state)
        this.props.createTicket(this.state)
        this.props.history.push('/')
    }
    
    handleTicketNumber = (e) => {
        this.setState({ticketNumber: e.target.value})
    }
    
    render() {
        
        const { auth, tickets } = this.props
        if(!auth.uid) return <Redirect to='/' />
        
        return (
            <>
                <div className='create-ticket'>
                    <form onSubmit={this.handleSubmit} className='d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column '>
                            <h1>Create Ticket</h1>
                            <div className=' mt-5'>
                                <input
                                    type='text'
                                    id='title'
                                    onChange={this.handleChange}
                                    placeholder='Title'
                                />
                            </div>
                            <div className=' mt-2'>
                                <input
                                    type='text'
                                    id='firstName'
                                    onChange={this.handleChange}
                                    placeholder='Client First Name'
                                />
                            </div>
                            <div className=' mt-2'>
                                <input
                                    type='text'
                                    id='lastName'
                                    onChange={this.handleChange}
                                    placeholder='Client Last Name'
                                />
                            </div>
                            <div className=' mt-2'>
                                <input
                                    type='email'
                                    id='email'
                                    onChange={this.handleChange}
                                    placeholder='Client Email'
                                />
                            </div>
                            <div className=' mt-2'>
                                <input
                                    type='text'
                                    id='department'
                                    onChange={this.handleChange}
                                    placeholder='Department'
                                />
                            </div>
                            <div className=' mt-2'>
                                <input
                                    type='text'
                                    id='status'
                                    onChange={this.handleChange}
                                    placeholder='Status'
                                />
                            </div>
                            <div className=' mt-2'>
                            <textarea
                                id='comment'
                                onChange={this.handleChange}
                                placeholder='Comment'
                            />
                            </div>
                            <div className='d-flex justify-content-center mt-2'>
                                <button className='btn btn-primary'>Create</button>
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
        auth: state.firebase.auth,
        tickets: state.firestore.ordered.tickets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTicket: (ticket) => dispatch(createTicket(ticket))
    }
}
    

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'tickets'}
    ])
) (CreateTicket);