import React from 'react'
import '../Css/Button.css'

const Button = (props) => {
    return (
        <button onClick={props} className="button_style">
           { props.children}
        </button>
    )
}

export default Button
