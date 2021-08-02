import React, {} from 'react';
import {removeTicket} from "../../../store/actions/ticketActions";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons";


const TicketDelete = ({ticket, removeTicket, auth}) => {

    const handleDelete = (ticket) => {
        removeTicket(ticket)
    }
    
    if(auth.uid){
        console.log("auth", auth)
        return (
            <>
                <div onClick={() => handleDelete(ticket)}>
                    <FontAwesomeIcon  icon={faTrashAlt} />
                </div>
            </>
        );
    } else {
        return (
            <>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTicket: ticket => dispatch(removeTicket(ticket))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (TicketDelete);