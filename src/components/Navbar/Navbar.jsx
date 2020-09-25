import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";

const Navbar = ({ currentAdmin, handleNewUserFormOpen, handleLoginOpen, handleLogout }) => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <img src="/OrangeHubLogo.png" width="60" height="60" class="d-inline-block align-top mr-3" alt="" loading="lazy" ></img>
            <span className="navbar-brand-orange">OrangeHub</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    {
                        currentAdmin && 
                   
                        <>
                            <li>
                                <div
                                onClick={() => handleNewUserFormOpen()}
                                 style={{
                                    margin: '1rem'
                                }}>
                                    <AiOutlineUserAdd size="2.5rem" color="orange" />
                                    <div style={{
                                        color: 'orange'
                                    }}>
                                        <p>Create Profile</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div 
                                onClick={() => handleLogout()}
                                style={{
                                    margin: '1rem'
                                }}>
                                    <IoIosLogOut size="2.5rem" color="orange" />
                                    <div style={{
                                            color: 'orange'
                                        }}>
                                            <p>Logout</p>
                                    </div>
                                </div>
                                
                            </li> 
                        </>

                    }
                    {
                        !currentAdmin && 
                        <>
                            <li>
                                <div 
                                onClick={() => handleLoginOpen()}
                                style={{
                                    margin: '1rem'
                                }}>
                                    <IoIosLogIn size="2.5rem" color="orange" />
                                    <div style={{
                                            color: 'orange'
                                        }}>
                                            <p>LogIn</p>
                                    </div>
                                </div>
                            
                            </li> 
                        </>

                    }
                            
                </ul>
                <span className="navbar-text">
                    {
                        currentAdmin && 'Currently Logged in as: Admin'
                    }
                </span>
            </div>
        </nav>
    )
};

export default Navbar;


