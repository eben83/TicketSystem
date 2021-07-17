import React, {} from 'react';

import './ticket-summary.xs.css'

const TicketSummary = (props) => {
    return (
        <>
            <div className="ticket-summary card m-2">
                <div className="card-body text-center">
                    <div className='h3'>Ticket</div>
                    <p>this is the number</p>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <p>created on:</p>
                    <p>1 July 2021</p>
                </div>
            </div>
        </>
    );
}
export default TicketSummary;