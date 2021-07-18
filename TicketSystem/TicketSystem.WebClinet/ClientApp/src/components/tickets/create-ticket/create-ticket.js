import React, {Component} from 'react';
import { connect } from "react-redux";
import { createTicket } from "../../../store/actions/ticketActions";

import './create-ticket.xs.css'
import './create-ticket.sm.css'
import './create-ticket.md.css'
import './create-ticket.lg.css'
import './create-ticket.xl.css'

class CreateTicket extends Component {
    
    state = {
        firstName: '',
        lastName: '',
        email: '',
        department: '',
        comment: '',
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
    }
    
    render() {
        return (
            <>
                <div className='create-ticket'>
                    <form onSubmit={this.handleSubmit} className='d-flex justify-content-center align-items-center'>
                        <div className='d-flex flex-column '>
                            <h1>Create Ticket</h1>
                            <div className=' mt-5'>
                                <input
                                    type='text'
                                    id='firstName'
                                    onChange={this.handleChange}
                                    placeholder='First Name'
                                />
                            </div>
                            <div className=' mt-2'>
                                <input
                                    type='text'
                                    id='lastName'
                                    onChange={this.handleChange}
                                    placeholder='Last Name'
                                />
                            </div>
                            <div className=' mt-2'>
                                <input
                                    type='email'
                                    id='email'
                                    onChange={this.handleChange}
                                    placeholder='Email'
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

const mapDispatchToProps = (dispatch) => {
    return {
        createTicket: (ticket) => dispatch(createTicket(ticket))
    }
}
    

export default connect(null, mapDispatchToProps) (CreateTicket);