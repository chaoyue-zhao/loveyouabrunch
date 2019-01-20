import React from 'react';

const DateInfo= () => {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturaday"];

    return (
        <p className= "header__date heading-secondary">
        {dayNames[new Date().getDay()]}, {monthNames[new Date().getMonth()]} {new Date().getDate()}, {new Date().getFullYear()}
        </p>
    )
}

export default DateInfo