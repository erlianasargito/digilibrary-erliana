import React, { useState } from 'react'
import DetailBook from './detailBook'
import '../../styles/components/CardStyle.css'
import { Link } from 'react-router-dom'

function Card() {
    const [book] = useState(DetailBook)
  return (
    <>
    <h1>List Books</h1>
    
    <div className='card-wrapper'>
        {book.map((item) => (
            <div className='card'>
                <Link to={'/DetailBooks/' + item.id}>
            <div className="img-wrapper">
                <img src={item.img}/>
            </div>
            <div className="card-title">
            <h2>{item.title}</h2>
            </div>
            <div className="card-content">
                <p>{item.description}</p>
            </div>
            </Link>
            </div>
        ))}
    </div>
    </>
  )
}

export default Card