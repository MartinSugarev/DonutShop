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
            <img className="startScreen-unicorn-dust" src="/unicorn_dust.svg" alt="unicorn_dust"/>
                <div className="startScreen-container-inner">
                  <img className="startScreen-true-blood" src="/true_blood.svg" alt="true_blood"/>
                  <Title firstLine={'the'} secondLine={'donut'} thirdLine={'shop'} />
                  <Button handleClick={handleClick} img={''} title={'start'} />
                </div>
        </main>
    )
}

export default memo(StartScreen)
