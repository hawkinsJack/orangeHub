import React from 'react'
import { AiOutlineUserAdd } from "react-icons/ai";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";

const Navbar = () => {


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <span className="navbar-brand">OrangeHub</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li>
                        <div style={{
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
                        <div style={{
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
                </ul>
                <span className="navbar-text">
                    Currently Logged in as: Admin 
              
                </span>
            </div>
        </nav>
    )
};

export default Navbar;


