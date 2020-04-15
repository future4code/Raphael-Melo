import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
     return(
        <div className="smallCard-container">
              <div className="smallCard-item">
              <img src={ props.imagem } />
              <p><strong>{props.texto0} </strong>{props.texto1}</p>
              </div>
         </div>
    )
}

export default CardPequeno