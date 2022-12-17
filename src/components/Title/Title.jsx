import './title.css'
import React, {memo} from 'react'

const Title = ({firstLine, secondLine, thirdLine = ''}) => {
    return (
        <div className="title-container">
            <p>{firstLine}</p>
            <p>{secondLine}</p>
            <p>{thirdLine}</p>
        </div>
    )
}


export default memo(Title)
