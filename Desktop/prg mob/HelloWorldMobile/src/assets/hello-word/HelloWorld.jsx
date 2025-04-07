import { useState } from "react";

const HelloWorld = () => {    
    
    let [name, setName] = useState('');
    let [message, setmessage] = useState('');

    const handleHelloWorld = (event) => {
        setmessage(`hello world, ${name}!`);
    };

    function handleClear(){
        setmessage('');
        setName('');
    };


   const handleChangeInput = (event)=> setName(event.target.value)

    const handleKeyInput = (event) => {

       if(event.key === 'Escape'){handleClear();

       }else if(event.key === 'Enter'){handleHelloWorld();}

    };



    return (
        <>
        <h1>Hello World!</h1>
        <input type="text" onChange={handleChangeInput} onKeyUp={handleKeyInput} value ={name}/>
        <button onClick={handleHelloWorld}>Hello World</button>
        <button onClick={handleClear}>Limpar</button>
        {message && <p>{message}</p>}

        </>
    )
}

export default HelloWorld;