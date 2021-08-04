import React from 'react'

import classes from './Header.module.css'
import foodImage from '../../assets/food.jpg' 

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>ReactFood</h1>
                <button>Cart</button>
            </header>
            <div className={classes.mainImage}>
                <img src={foodImage} alt="Prato de Comida"/>
            </div>
        </>
    )

};

export default Header;