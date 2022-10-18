import React, { useState } from 'react'

import {Button} from './Button'
import { Display } from './Display'

const style = {
    display: "flex", 
    justifyContent: "center", 
    alignItems: 'center'
}

export const Box = () => {
    const [valor, setValor] = useState(7)

    const increment = () => valor <10 && setValor(valor + 1)
    const decrement = () => valor > 0 && setValor(valor - 1)
    
    return <div style={style}>
        {valor !== 0 && <Button disabled={valor === 0} onClick={decrement}>-</Button>}
        <Display valor={valor}/>
        {valor !== 10 && <Button disabled={valor === 10} onClick={increment}>+</Button>}
    </div>
}
