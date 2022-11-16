import React, { useState } from "react";

function FunctionalComponent(props) {

    const [count, setCount] = useState(0);
    const [changeName, setChangeName] = useState("");
    const [changeAge, setChangeAge] = useState("");

    const { name, age, setName, setAge } = props;

    return (
        <div>
            <p>This is a Functional Component</p>
            <button onClick={() => setCount(count + 1)} >Click me to add 1</button>
            <button onClick={() => setCount(count - 1)} >Click me to Subtract 1</button>
            <h1>{count}</h1>
            <h1>My name is {name}, I am {age} years old</h1>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => setName(changeName)} >Change Name</button> <br /> <br />
            <input onChange={(e) => setChangeAge(e.target.value)} />
            <button onClick={() => setAge(changeAge)} >Change Age</button>
        </div>
    );
};

export default FunctionalComponent