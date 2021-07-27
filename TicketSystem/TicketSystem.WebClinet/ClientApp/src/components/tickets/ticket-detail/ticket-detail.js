import React, {} from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import {Redirect} from "react-router-dom";
import moment from 'moment'

import './ticket-details.xs.css'

const TicketDetail = (props) => {
    const { ticket, auth } = props
    
    if(!auth.uid) return <Redirect to='/signin' />
    

    if(ticket) {
       return (
           <>
               <div className='container'>
                   <div className='ticket-detail card'>
                       <div className='card-body d-flex flex-column align-items-center'>
                           <div className='h3'>{ticket.title}</div>
                           <div className='row w-100'>
                               <div className='col-12 col-md-6 pr-5 '>
                                   <div className='d-flex'>
                                       <div className='mr-2'>Department:</div>
                                       <div>{ticket.department}</div>
                                   </div>
                                   <div className='d-flex'>
                                       <div className='mr-2'>Status:</div>
                                       <div>{ticket.status}</div>
                                   </div>
                                   <div className='d-flex'>
                                       <div className='mr-2'>Date Created:</div>
                                       <div>{moment(ticket.createAt.toDate().toString()).calendar()}</div>
                                   </div>
                                   <div className='d-flex'>
                                       <div className='mr-2'>Created by:</div>
                                       <div>{ticket.authorFirstName} {ticket.authorLastName}</div>
                                   </div>
                                   <div className='d-flex'>
                                       <div className='mr-2'>Longitude:</div>
                                       <p>
                                           {ticket.longitude}
                                       </p>
                                       <div className='ml-2'>Latitude:</div>
                                       <p>
                                           {ticket.latitude}
                                       </p>
                                   </div>
                               </div>
                               <div className='col-12 col-md-6 pl-5'>
                                   <div className='d-flex'>
                                       <div   className='mr-2'>Client:</div>
                                       <p>{ticket.firstName} {ticket.lastName}</p>
                                   </div>
                                   <div className='d-flex'>
                                       <div   className='mr-2'>Client Contact:</div>
                                       <p>{ticket.email}</p>
                                   </div>
                                   <div className='d-flex'>
                                       <div className='mr-2'>Comments:</div>
                                       <p>
                                           {ticket.comment}
                                       </p>
                                   </div>
                                   
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </>
       )
    } else {
        return (
            <>
                <h2>Loding Data....</h2>
            </>
        );
    }
    
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id
    const tickets = state.firestore.data.tickets
    const ticket = tickets ? tickets[id] : null
    return {
        ticket : ticket,
        auth: state.firebase.auth
    }
    
}
export default compose(
    connect (mapStateToProps),
    firestoreConnect([
        {collection: 'tickets'}
    ])
) (TicketDetail);