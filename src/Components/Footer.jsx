import React from 'react'; 

const Footer = (props) => {
    return(
        <div className = "footer">
            <p>{props.message}</p>
            <p>{props.thanks}</p>
            <p>{props.copyright}</p>
        </div>
    )
}

export default Footer