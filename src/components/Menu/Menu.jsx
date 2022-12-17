import './menu.css'
import React, {memo} from 'react';
import Donut from '../Donut/Donut';
import Title from '../Title/Title';
import {data} from '../../mockedData/mockedData'

const Menu = () => {
    return (
        <section className="menu-container">
            <Title firstLine={'the'} secondLine={'menu'}/>
            {data.map((donut, index) => {
               return <Donut key={index} firstName={donut.firstName} secondName={donut.secondName} img={donut.img} />
                
            })}
        </section>
    )
}

export default memo(Menu)
