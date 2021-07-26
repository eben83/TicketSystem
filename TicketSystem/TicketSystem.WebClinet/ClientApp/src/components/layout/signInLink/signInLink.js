import React, { Profiler } from 'react';
import { NavLink} from "react-router-dom";
import { connect } from 'react-redux'
import { signOut } from "../../../store/actions/authActions";
import { map } from '@firebase/util'

import './signInLink.xs.css'

const SignInLink = (props) => {
    return (
        <>
            <ul className='sign-in-link d-flex d-flex w-100 justify-content-end align-items-center'>
                <li className=''>
                    <NavLink to='/create' >New Ticket</NavLink>
                </li>
                <li className='ml-4 mr-4'>
                    <NavLink to='/signup' >New User</NavLink>
                </li>
                <li className='ml-4 mr-4'>
                    <a onClick={props.signOut}>Log Out</a>
                </li>
                <li className='ml-4 mr-4 profile font-weight-bolder'>
                    <NavLink to='/'>{props.profile.initials}</NavLink>
                </li>
            </ul>
        </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps) (SignInLink);