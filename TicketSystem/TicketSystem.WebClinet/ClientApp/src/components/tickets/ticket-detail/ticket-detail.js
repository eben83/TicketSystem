import React, {} from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import './ticket-details.xs.css'

const TicketDetail = (props) => {
    const { ticket } = props

    if(ticket) {
       return (
           <>
               <div className='container'>
                   <div className='ticket-detail card'>
                       <div className='card-body d-flex flex-column align-items-center'>
                           <div className='h3'>{ticket.title}</div>
                           <div >
                               <div className='d-flex'>
                                   <div className='mr-2'>Department:</div>
                                   <div>{ticket.department}</div>
                               </div>
                           </div>
                           <div className='d-flex'>
                               <div className='mr-2'>Status:</div>
                               <div>{ticket.status}</div>
                           </div>
                           <div className='d-flex'>
                               <div className='mr-2'>Date Created:</div>
                               <div>2 July 2021</div>
                           </div>
                           <div className='d-flex'>
                               <div className='mr-2'>Created by:</div>
                               <div>{ticket.authorFirstName} {ticket.authorLastName}</div>
                           </div>
                           <div className='d-flex mt-3'>
                               <div className='mr-2'>Comments:</div>
                               <p>
                                   {ticket.comment}
                               </p>
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
        ticket : ticket
    }
}
export default compose(
    connect (mapStateToProps),
    firestoreConnect([
        {collection: 'tickets'}
    ])
) (TicketDetail);