import React, {Component} from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import TicketDelete from "../tickets/ticket-detail/ticket-delete";
import moment from "moment";

import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";

import './home.xs.css'

const Home = ({tickets, auth}) => {
    
        if(auth.isLoaded) {
            return (
                <>
                    <div className='home'>
                        <div className=''>
                            <table className='table'>
                                <thead>
                                <tr>
                                    <th scope="col">Date</th>
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
                                            <td>{moment(ticket.createAt.toDate().toString()).calendar()}</td>
                                            <td>{ticket.department}</td>
                                            <td>{ticket.authorFirstName} {ticket.authorLastName}</td>
                                            <td>{ticket.status}</td>
                                            <td className='d-flex'>
                                                <Link to={'/ticket/' + ticket.id} className='pr-3'>
                                                <FontAwesomeIcon icon={faInfoCircle} />
                                                </Link>
                                                <TicketDelete ticket={ticket}/>
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
                <div className='d-flex  mt-5 pt-5 w-100'>
                    <h1 className='text-center'>Loading....</h1>
                </div>
            )
        }
}
const mapStateToProps = (state) => {
    return {
        tickets: state.firestore.ordered.tickets,
        auth: state.firebase.auth
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tickets', orderBy: ['createAt', 'desc']}
    ])
)(Home);