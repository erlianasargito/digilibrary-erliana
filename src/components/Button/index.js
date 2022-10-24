import React from 'react'
import {ButtonStyled} from '../../styles/components/ButtonStyled'

const Button = (props) => {
    const {buttonName, onClick} = props
  return (
    <ButtonStyled onClick={onClick}>{buttonName}</ButtonStyled>
  )
}

export default Button