import React, {Component} from 'react';
import TicketList from "../tickets/ticket-list/ticket-list";
import { connect } from 'react-redux'

import './home.xs.css'

class Home extends Component {
    render() {
        
        const { tickets } = this.props
        console.log(this.props)
        
        return (
            <>
                <div className='home'>
                    <div className=''>
                        <TicketList tickets={tickets}/>
                    </div>
                </div>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        tickets: state.ticket.tickets
    }
}
export default connect(mapStateToProps)(Home);