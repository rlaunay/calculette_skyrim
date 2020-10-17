import React from 'react'

const Select = (props) => {
    return (
        <React.Fragment>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">{props.nom}</label>
            </div>
            <select value={props.valeur} disabled={props.disabled} className="custom-select" id="inputGroupSelect01" onChange={props.change}>
                {props.options.map((op, i) => <option key={i} value={op.value}>{op.label}</option>)}
            </select>
        </React.Fragment>
    )
}

export default Select
