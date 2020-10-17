import React from 'react';

const Element = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-around align-items-center">
            <p className="m-0">Article : {props.name}</p>
            <p className="m-0">Quantité : {props.quantite}</p>
            <p className="m-0"> Prix Total : {parseInt(props.prix)}</p>
            <button type="button" className="close" aria-label="Close" onClick={props.click}>
                <span aria-hidden="true">&times;</span>
            </button>
        </li>
    )
}

export default Element
