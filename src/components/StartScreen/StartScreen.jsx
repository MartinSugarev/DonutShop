import './startScreen.css'
import React, {memo} from 'react'
import {useNavigate} from 'react-router-dom'
import Title from '../Title/Title'
import Button from '../Button/Button'

const StartScreen = () => {

    const navigate = useNavigate()

    function handleClick(e){
      e.preventDefault()  
      navigate('/menu')
    }



    return (
        <main>
            <div className="startScreen-container"></div>
                <div className="startScreen-container-inner">
                  <Title firstLine={'the'} secondLine={'donut'} thirdLine={'shop'} />
                  <Button handleClick={handleClick} img={''} title={'start'} />
                </div>
        </main>
    )
}

export default memo(StartScreen)
