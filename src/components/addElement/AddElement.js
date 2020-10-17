import React from 'react';

const AddElement = (props) => {
    return (
        <div className="input-group  mb-3">

            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Nom de l'article</span>
            </div>
            <input className="form-control" value={props.articleValue} onChange={props.articleChange} type="text"/>

            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Prix</span>
            </div>
            <input className="form-control" value={props.prixValue} onChange={props.prixChange} type="number" onFocus={(event) => event.target.select()}/>

            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Quantité</span>
            </div>
            <input className="form-control" value={props.quantiteValue} onChange={props.quantiteChange} type="number" onFocus={(event) => event.target.select()}/>


            <div className="input-group-append">
                <button className="btn btn-primary" type="button" id="button-addon2" onClick={props.click}>Ajouter</button>
            </div>
        </div>
    )
}

export default AddElement
