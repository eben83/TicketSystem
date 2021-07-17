import React, {} from 'react';

import './home.xs.css'
import TicketList from "../tickets/ticket-list/ticket-list";

const Home = (props) => {
    return (
        <>
            <div className='home'>
                <div className=''>
                    <TicketList />
                </div>
            </div>
        </>
    );
}
export default Home;