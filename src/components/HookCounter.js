import React, {useState} from 'react'

function HookCounter() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter

// Rules of Hooks:-
// 1. Only call Hooks at the Top Level - not from inside loops, conditions, or nested functions
// 2. Only call Hooks from React Functions
 
