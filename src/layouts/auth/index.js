import React from 'react'
import '../../styles/layouts/LayoutAuth.css'

const LayoutAuth = (props) => {
    const {children} = props
  return (
    <div className='layout-login-wrapper'>
        <div className="left">
            <h1>Book is a Window <br />
            to the World</h1>
            <h5>Photo by Priscilla Du Preez on Unsplash</h5>
        </div>
        <div className="right">
            {children}
        </div>
    </div>
  )
}

export default LayoutAuth