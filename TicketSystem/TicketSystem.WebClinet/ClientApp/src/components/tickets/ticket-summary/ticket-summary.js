import React, {} from 'react';
import moment from 'moment'

import './ticket-summary.xs.css'

const TicketSummary = ({ticket}) => {
    
    return (
        <>
            <div className="ticket-summary card m-2">
                <div className="card-body text-center">
                    <div className='h3'>{ticket.title}</div>
                    <p>Ticket ID:</p>
                    {/*Figure out ticket id in number order*/}
                    <div className='d-flex justify-content-between'>
                        <p>Created on:</p>
                        <p>{moment(ticket.createAt.toDate().toString()).calendar()}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Client:</p>
                        <p>{ticket.firstName} {ticket.lastName}</p>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default TicketSummary;