import React from 'react';
import DateInfo from './Date';
import WeatherInfo from './WeatherInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Header = (props) => {
    return (
        <header className = "header">
            <div className="header__logo">
                <FontAwesomeIcon icon="utensils" className="header__logoImg"/>
            </div>
            <div className="header__main">
                <DateInfo />
                <h1 className="header__title heading-primary">{props.title}</h1>
                <p className="header__tagline heading-tertiary">{props.tagline}</p>
            </div>
            <div className="header__weather">
                <WeatherInfo />
            </div>
        </header>
        
    )
}

export default Header 