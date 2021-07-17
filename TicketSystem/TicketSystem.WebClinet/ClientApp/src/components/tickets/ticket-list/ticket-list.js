import React, {} from 'react';
import TicketSummary from "../ticket-summary/ticket-summary";

import './ticket-list.xs.css'
import './ticket-list.sm.css'
import './ticket-list.md.css'
import './ticket-list.lg.css'
import './ticket-list.xl.css'

const TicketList = (props) => {
    return (
        <>
            <div className='ticket-list d-flex flex-wrap justify-content-center'>
                <TicketSummary />
                <TicketSummary />
                <TicketSummary />
                <TicketSummary />
                <TicketSummary />
                <TicketSummary />
                <TicketSummary />
                <TicketSummary />
                <TicketSummary />
            </div>
        </>
    );
}
export default TicketList;