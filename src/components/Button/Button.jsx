import './button.css'
import React, {memo} from 'react'

const Button = ({title = '', img = '', handleClick}) => {
    return (
        <button onClick={(e) => handleClick(e)} >
            {title === '' ? <img src={img} alt="pay-method"/> : title  }
        </button>
    )
}

export default memo(Button)
