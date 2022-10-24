import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {DetailBook} from '../../components/Card/detailBook'
import '../../styles/pages/DetailBookStyle.css'

const index = () => {
    const {id} = useParams();
    const [item] = useState(DetailBook[id - 1])
  return (
    <div className="detail-wrapper">
        <div className='above'>
        <div className="buttons">
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
        </div>
    </div>
    </div>
  )
}

export default index