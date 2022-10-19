import React from 'react'

import { Button } from './Button'

const style = {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    padding: 0,
    margin:0
}

// export const Star = ({active=false, onClick}) => {
//     return <button style={style} type="button" onClick={onClick}><svg stroke="black" fill={active?'yellow':'white'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg></button>
// }

export const Star = ({disabled, active=false, onClick}) => {
    return <Button disabled={disabled} style={style} onClick={onClick}><svg stroke="black" fill={active?'yellow':'white'} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg></Button>
}