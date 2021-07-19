import React, {Component} from 'react';
import TicketList from "../tickets/ticket-list/ticket-list";
import { connect } from 'react-redux'
import { firestoreConnect } from "react-redux-firebase";
import { compose } from 'redux'

import './home.xs.css'

class Home extends Component {
    render() {
        
        const { tickets } = this.props
        // console.log(this.props)
        
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
    console.log("the data",state)
    return {
        tickets: state.firestore.ordered.tickets
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'tickets'}
    ])
)(Home);