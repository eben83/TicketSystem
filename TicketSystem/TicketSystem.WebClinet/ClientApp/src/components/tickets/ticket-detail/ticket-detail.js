import React, {} from 'react';

import './ticket-details.xs.css'

const TicketDetail = (props) => {
    const id = props.match.params.id
    return (
        <>
            <div className='container'>
                <div className='ticket-detail card'>
                    <div className='card-body d-flex flex-column align-items-center'>
                        <div className='h3'>Ticket - {id}</div>
                        <div >
                            <div className='d-flex'>
                                <div className='mr-2'>Department:</div>
                                <div>IT</div>
                            </div>
                        </div>
                        <div className='d-flex'>
                            <div className='mr-2'>Status:</div>
                            <div>In Progress</div>
                        </div>
                        <div className='d-flex'>
                            <div className='mr-2'>Date Created:</div>
                            <div>2 July 2021</div>
                        </div>
                        <div className='d-flex mt-3'>
                            <div className='mr-2'>Comments:</div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                                mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default TicketDetail;