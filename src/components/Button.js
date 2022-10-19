import React from 'react'

export const Button = ({disabled, onClick, children, style}) => {
    return (
        <button 
        style={style}
            disabled={disabled} 
            onClick={onClick}>
            {children}
        </button>
    )
}