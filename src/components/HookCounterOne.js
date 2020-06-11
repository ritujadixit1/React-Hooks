// useEffect after render
// useEffect runs after every render of the component
import React, { useState, useEffect } from 'react'

function HookCounterOne() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default HookCounterOne
