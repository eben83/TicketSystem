import React, {} from 'react';
import {Link} from "react-router-dom";
import SignInLink from "../signInLink/signInLink";
import SignOutLink from "../signOutLink/signOutLink";
import { connect } from 'react-redux'


import './navbar.xs.css'
import './navbar.sm.css'
import './navbar.md.css'
import './navbar.lg.css'
import './navbar.xl.css'

const Navbar = (props) => {
    return (
        <>
            <navbar className='nav navbar navbar-expand-md h-auto d-flex '>
                <div className='w-100 d-flex'>
                    <Link to='/'>Ticket</Link>
                    <SignInLink />
                    <SignOutLink />
                </div>
            </navbar>
        </>
    );
}

const mapStateToProps = (state) => {
    return {}
}
export default connect(mapStateToProps) (Navbar);