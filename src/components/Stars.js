import React, { useState } from 'react'

import { Star } from './Star'

export const Starts = () => {
    const [value, setValue] = useState(0)
    const handleClick = (v) => setValue(v === value ? 0 : v)

    const [d, setD] = useState(false)

    return <div>
        <button type="button" onClick={()=>setD(!d)}>{d?'Fechado':'Aberto'}</button>
        {[1,2,3,4,5].map(n => <Star disabled={d} key={n} active={value >= n } onClick={() => handleClick(n)}/>)}
    </div>
}