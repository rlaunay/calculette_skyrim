import React, { useState } from 'react'
import './App.css'

import AddElement from './components/addElement/AddElement';
import Element from './components/Elment/Element';
import Select from './components/select/Select';
import Input from './components/Input/Input';

const App = () => {

  const [articleState, setArticle] = useState([]);
  const [totalPrixState, setTotal] = useState(0);

  const [compState, setComp] = useState(0);
  const changeCompHandler = (event) => setComp(event.target.value);

  const [arnaqueState, setArnaque] = useState(0);
  const changeArnaqueHandler = (event) => setArnaque(event.target.value);

  const [prixState, setPrix] = useState(0);
  const changePrix = (event) => setPrix(event.target.value);

  const [articleNameState, setArticleName] = useState("");
  const changeArticleName = (event) => setArticleName(event.target.value);

  const [quantiteSate, setQuantite] = useState(1);
  const changeQuantite = (event) => setQuantite(event.target.value);

  const [showCharmSate, setShowSate] = useState("");
  const [typeState, setType] = useState();
  const changeType = (event) => {
    if(event.target.value === 'vente') {
      setShowSate("disabled");
      setCharm('non');
    } else {
      setShowSate("");
    }
    setType(event.target.value)
  };

  const [charmState, setCharm] = useState(1);
  const changeCharm = (event) => setCharm(event.target.value);

  const [newPrixState, setNewPrix] = useState(0);

  const addElementHandler = () => {
    const newArticles = [ ...articleState ];
    newArticles.push({ name: articleNameState, prix: prixState * quantiteSate});
    const newTotal = parseInt(totalPrixState) + parseInt(prixState) * quantiteSate;
    setTotal(newTotal);
    setArticleName("");
    setPrix(0);
    setArticle(newArticles);
  }

  const deleteElement = (index) => {
    const newArticles = [ ...articleState ];
    const newTotal = parseInt(totalPrixState) - newArticles[index].prix;
    setTotal(newTotal);
    newArticles.splice(index, 1);
    setArticle(newArticles);
  }

  const deleteAllElement = () => {
    setArticle([]);
  }

  const calculPrixFinal = () => {
    if (arnaqueState === 0) {
      setNewPrix(totalPrixState);
    } else {
      if (arnaqueState < compState) {
        alert('L\'arnque ne peut pas être plus petite que la compétence du joueur');
      } else {
        let diff = arnaqueState - compState;
        let newPrix = 0;
        if (typeState === 'achat') {
          if(charmState === 'oui') {
            diff = diff - 10;
            diff = diff < 0 ? 0 : diff;
            newPrix = totalPrixState * (1 + (diff / 100));
          } else {
            newPrix = totalPrixState * (1 + (diff / 100));
          }
        } else {
          newPrix = totalPrixState * (1 - (diff / 100));
        }
        setNewPrix(Math.floor(newPrix));
      }
    }
  }


  return (
    <div className="d-flex flex-column justify-content-center container mt-5">
      <AddElement 
            click={addElementHandler} 
            prixValue={prixState} 
            prixChange={changePrix} 
            articleValue={articleNameState} 
            articleChange={changeArticleName}
            quantiteValue={quantiteSate}
            quantiteChange={changeQuantite}/>

      <ul className="list-group">
        {articleState.map((el, i) => <Element name={el.name} prix={el.prix} quantite={quantiteSate} key={i} click={deleteElement.bind(this, i)}/>)}
      </ul>

      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mt-3 mb-3" >Total : {totalPrixState}</h2>
        <button className="btn btn-outline-danger" onClick={deleteAllElement}>Suppimer tous les articles</button>
      </div>

      <Input label="Arnaque (en %)" change={changeArnaqueHandler} valeur={arnaqueState} />
      <Input label="Compétence joueur (en %)" change={changeCompHandler} valeur={compState} />

      <div className="input-group mb-3">
        <Select nom="Type" valeur={typeState} change={changeType} options={[ { label: 'Achat', value: 'achat' }, { label: 'Vente', value: 'vente' } ]}/>
        <Select nom="Charme" valeur={charmState} disabled={showCharmSate} change={changeCharm} options={[ { label: 'Non', value: 'non' }, { label: 'Oui', value: 'oui' } ]} />
      </div>

      <button className="btn btn-primary" onClick={calculPrixFinal} >Calcul</button>

      <h1 className="mt-5 mb-5" >Resultat : {newPrixState}</h1>
    </div>
  )
}

export default App

