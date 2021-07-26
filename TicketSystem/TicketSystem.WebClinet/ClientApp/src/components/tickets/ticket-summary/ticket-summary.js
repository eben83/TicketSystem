import React, {} from 'react';

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
                        <p>1 July 2021</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Created by:</p>
                        <p>Eben</p>
                    </div>
                </div>
                
            </div>
        </>
    );
}
export default TicketSummary;