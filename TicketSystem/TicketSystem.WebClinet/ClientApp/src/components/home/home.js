import React, {Component} from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {removeTicket} from "../../store/actions/ticketActions";
import {faInfoCircle, faTrashAlt} from "@fortawesome/free-solid-svg-icons";

import './home.xs.css'

const Home = ({tickets, auth, removeTicket}) => {

    const handleDelete = (ticket) => {
        removeTicket(ticket)
    }
        
        // console.log(this.props)
        
        if(auth.isLoaded) {
            return (
                <>
                    <div className='home'>
                        <div className=''>
                            <table className='table'>
                                <thead>
                                <tr>
                                    {/*<th>Date</th>*/}
                                    <th scope="col">Department</th>
                                    <th scope="col">Created by</th>
                                    <th scope="col">status</th>
                                    <th scope="col">Information</th>
                                </tr>
                                </thead>
                                <tbody>
                                {tickets && tickets.map(ticket => {
                                    return (
                                        <tr>
                                            <td>{ticket.department}</td>
                                            <td>{ticket.authorFirstName} {ticket.authorLastName}</td>
                                            <td>{ticket.status}</td>
                                            
                                            <td className='d-flex'>
                                                <Link to={'/ticket/' + ticket.id} className='pr-3'>
                                                    <FontAwesomeIcon icon={faInfoCircle} />
                                                </Link>
                                                <div onClick={() => handleDelete(ticket)}>
                                                    <FontAwesomeIcon  icon={faTrashAlt} />
                                                </div>
                                            </td>
                                            
                                        </tr>
                                    )
                                })}
                                </tbody>
                            </table>
                            
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <div className='d-flex text-center mt-5 pt-5'>
                    <h1>Loading....</h1>
                </div>
            )
        }
}
const mapStateToProps = (state) => {
    console.log("the data",state)
    return {
        tickets: state.firestore.ordered.tickets,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTicket: ticket => dispatch(removeTicket(ticket))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        { collection: 'tickets', orderBy: ['createAt', 'desc']}
    ])
)(Home);