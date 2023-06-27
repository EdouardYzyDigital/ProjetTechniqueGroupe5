import React, { Fragment, useContext, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom'
import {
    Button,
    NavItem
} from 'reactstrap';
import  logo  from '../images/MaxAirain2.png'
import '../App.css'
  
const NavbarHome = () => {

    return (
        <div className='py-1' style={{backgroundColor:"#379EC1"}}>
            <Fragment>
                <ul className='navbar-container navbar-expand d-flex justify-content-between align-items-center list-style-none'>
                    <NavItem >
                        <NavLink to='/'>
                            <img src={logo} alt="" style={{width:"200px", height:"50px", marginTop: '10px'}}/>
                        </NavLink>
                    </NavItem>
                    <NavItem 
                    >
                        <NavLink 
                            className='nav-items mr-3' 
                            to='/signin' 
                        >
                            Signin
                        </NavLink>
                        {/*dropdown && <Dropdown/>*/}
                    </NavItem>
                </ul>
            </Fragment>
        </div >
    );
}
  
export default NavbarHome;