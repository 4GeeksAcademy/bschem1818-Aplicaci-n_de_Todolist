import { name } from 'file-loader';
import React, { useState } from 'react';
import reactDom from "react-dom";

const Form = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [ addshores, setAddshores  ] = useState([]);

    function showValue(e) {
        if(inputValue === "") alert("The input cannot be empty");
        setInputValue(e.target.value) 
        console.log (inputValue)
        console.log (addshores)
    }
    
    function addChores (e) {
        e.preventDefault();
        setAddshores (...inputValue)
    }
   
    return (
    <>
        <h1>Form</h1>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input value={inputValue} type="text" className="form-control" id="name" placeholder="Ingresa tu nombre"/>
        </div>
        <div className="mb-3">
            <label htmlFor="lastname" className="form-label">Apel lido</label>
            <input type="text" className="form-control" id="lastname" placeholder="Ingresa tu Apellido"/>
        </div>
    </>
    );
};

export default Form;





