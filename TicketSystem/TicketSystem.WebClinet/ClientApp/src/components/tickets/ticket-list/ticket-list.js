import React, {} from 'react';
import TicketSummary from "../ticket-summary/ticket-summary";

import './ticket-list.xs.css'
import './ticket-list.sm.css'
import './ticket-list.md.css'
import './ticket-list.lg.css'
import './ticket-list.xl.css'

const TicketList = ({tickets}) => {
    return (
        <>
            <div className='ticket-list d-flex flex-wrap justify-content-center'>
                {tickets && tickets.map(ticket => {
                    return (
                        <TicketSummary ticket={ticket} key={ticket.id} />
                    )
                })}
            </div>
        </>
    );
}
export default TicketList;