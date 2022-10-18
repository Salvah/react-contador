import React from 'react'

const style={
    padding: '6px',
    backgroundColor: 'yellow',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '50%'
}

export const Button = ({disabled, onClick, children}) => {
    return (
        <button 
        style={style}
            disabled={disabled} 
            onClick={onClick}>
            {children}
        </button>
    )
}