import React from 'react'
import DetailBook from './detailBook'
import '../../styles/components/CardStyle.css'

function Card() {
  return (
    <>
    <h1>List Books</h1>
    <div className='card-wrapper'>
        {DetailBook.map((item) => (
            <div className='card'>
            <div className="img-wrapper">
                <img src={item.img}/>
            </div>
            <div className="card-title">
            <h2>{item.title}</h2>
            </div>
            <div className="card-content">
                <p>{item.description}</p>
            </div>
            <div className="button">
            <button><a>See more</a></button>
            </div>
            </div>
        ))}
    </div>
    </>
  )
}

export default Card