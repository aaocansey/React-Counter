import React, {useState} from 'react';

const FunctionCounter = () => {
    const [count, handleUpdate] = useState({number: 0})
    return (
    <>
        <h1>Counter: {count.number}</h1>
        <button onClick={() => handleUpdate({number: count.number + 1})}>Increase</button>
        <button onClick={() => handleUpdate({number: count.number - 1})}>Decrease</button>
    </>
    );
}

export default FunctionCounter;