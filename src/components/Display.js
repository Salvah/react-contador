import React from 'react'

const style = {
    color: "blue", 
    margin: "0 10px", 
    fontSize: '24pt', 
    border: "dashed 1px gray",
    padding: "40px"
}

export const Display = ({valor})=>{
    return <div style={style}>{valor}</div>
}