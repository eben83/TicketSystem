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
    
    const { auth, profile } = props
    
    const links = auth.uid ? <SignInLink profile={profile} /> : <SignOutLink />
    return (
        <>
            <navbar className='nav navbar navbar-expand-md h-auto d-flex '>
                <div className='w-100 d-flex'>
                    <Link to='/'>Ticket</Link>
                    { auth.isLoaded && links }
                </div>
            </navbar>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps) (Navbar);