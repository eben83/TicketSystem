import React, {} from 'react';
import { NavLink} from "react-router-dom";

import './signInLink.xs.css'

const SignInLink = (props) => {
    return (
        <>
            <ul className='sign-in-link d-flex d-flex w-100 justify-content-end align-items-center'>
                <li className=''>
                    <NavLink to='/create' >New Ticket</NavLink>
                </li>
                <li className='ml-4 mr-4'>
                    <NavLink to='/' >Log Out</NavLink>
                </li>
                <li className='ml-4 mr-4 profile'>
                    <NavLink to='/'>EB</NavLink>
                </li>
            </ul>
        </>
    );
}
export default SignInLink;