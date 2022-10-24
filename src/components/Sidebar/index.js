import React, { useState } from 'react'
import '../../styles/pages/HomeStyle.css'
import {FaTh, FaBars} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)
    const menuItem=[
        {
            path:"/explore",
            image:"",
            name:"explore",
            icon: <FaTh/>
        },
        {
            path:"/history",
            image:"",
            name:"history",
            icon: <FaTh/>
        }
    ]
  return (
    <div className="container">
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <div className="top_section">
                <div style={{marginLeft: isOpen ? "190px" : "15px"}} className="bars">
                    <FaBars onClick={toggle} />
                </div>
            </div>
            {
            menuItem.map((item, index) => (
                <NavLink style={{color: isOpen ? "#000000" : "#ffffff"}} to={item.path} key={index} className="link" activeclassname="active">
                    <div className="link_text">{item.name}</div>
                </NavLink>
            ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar