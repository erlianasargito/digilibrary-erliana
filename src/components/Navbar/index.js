import React from 'react'
import '../../styles/components/NavbarStyle.css'

function Navbar() {
  return (
    <>
    <nav>
        <div>
            <ul id='navbar'>
                <li>
                    <a href="#">All Categories</a>
                </li>
                <li>
                    <a href="#">All Time</a>
                </li>
                <li>
                    <a href="#">Search</a>
                </li>
            </ul>
        </div>
        <a href="#">
        <img src="../../assets/img/bookshelf.svg" alt="" />
        </a>
    </nav>
    </>
  )
}

export default Navbar