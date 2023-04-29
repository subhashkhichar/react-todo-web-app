import React, { useState } from "react";
import Tolist from "./Tolist";

const Todolists = () => {
    const [input, setInput] = useState(' ');
    const [items, setItems] = useState([]);

    const deleteItem = (id) => {

        setItems((olditem) => {
            return olditem.filter((arr, index) => {
                return index !== id;
            })
        })
    }

    const itemEvent = (e) => {
        setInput(e.target.value);
    };

    const listOfItems = (e) => {
        setItems((olditem) => {
            return [...olditem, input];
        });
        setInput('')
    }
    return (<>
        <div className="main-div">
            <div className="centerdiv">
                <br />
                <h1>ToDo list</h1>
                <br />
                <input type='text' placeholder="Add a items" value={input} onChange={itemEvent} />
                <button onClick={listOfItems}> + </button>
                <ol>
                    {/* <li>  {input} </li> */}
                    {items.map((itemvalue, index) => {
                        return <Tolist key={index}
                            id={index} text={itemvalue}
                            onSelect={deleteItem} />
                    })}
                </ol>
            </div>
        </div>
    </>)
}
export default Todolists;