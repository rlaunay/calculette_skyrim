import React from 'react'

const Input = (props) => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">{props.label}</span>
            </div>
            <input className="form-control" id={props.id} type="number" onChange={props.change} value={props.valeur} onFocus={(event) => event.target.select()}/>
        </div>
    )
}

export default Input
