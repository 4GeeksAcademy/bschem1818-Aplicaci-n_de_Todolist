import React, { useState } from 'react';
import reactDom from "react-dom";
import close from "../../img/close.png";

const Form = () => {
    const [inputValue, setInputValue] = useState('');
    const [shoreslist, setshoreslist] = useState([]);

    function showValue(e) {
        if (inputValue === "") alert("The input cannot be empty");
        setInputValue(e.target.value);
        console.log(inputValue);
        console.log(shoreslist);
    }

    function addChores(e) {
        e.preventDefault();
        console.log("El dato que quieres agregar es", inputValue);
        setshoreslist((shoreslist) => [...shoreslist, inputValue]);
        setInputValue("");
    }

    function borrar(index) {
        console.log (index)
        setshoreslist(
            shoreslist.filter(
                (value, i)=>{
                    return (index!==i)
                }
            )
        );
    }

    return (
        <div className="container col-6 mb-5" >
            <div className=" border p-3  bg-body rounded">
                <h1>todos</h1>
                <form onSubmit={addChores}>
                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} type="text" className="form-control" id="name" placeholder="Ingresa tu nombre"/>
                </form>
                {shoreslist.map((item, i) => (
                    <ul key={i}>
                        <li>
                            {item}
                            <img onClick={()=> borrar(i)}  className="closeButton" src={close} alt="close"/>
                        </li>
                    </ul>
                ))}
                <div>{shoreslist.length} tasks</div>
            </div>
            <div className="box-decoration">
                <span className="mx-1 rounded"></span>
                <span className="mx-2 rounded"></span>
                <span className="mx-3 rounded"></span>
            </div>
        </div>
    );
};

export default Form;