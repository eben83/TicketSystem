import React, {} from 'react';
import {NavLink} from "react-router-dom";

import './signOutLink.css'

const SignOutLink = (props) => {
    return (
        <>
            <ul className='sign-out d-flex w-100 justify-content-end align-items-center'>
                <li>
                    <NavLink to='/'>Login</NavLink>
                </li>
            </ul>
        </>
    );
}
export default SignOutLink;