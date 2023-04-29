import React from "react";

const Tolist = (props) => {


    return (
        <>
            <div className="Todo-style">
                <i class="fa fa-times" aria-hidden="true" onClick={() => {
                    props.onSelect(props.id);
                }} />
                <li>{props.text}</li>
            </div>
        </>
    )
}
export default Tolist;