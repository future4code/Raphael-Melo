import React from 'react';

class Etapa1 extends React.Component {
  state = {};


  render() {

    return <div>
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <form>
        <p>1. Qual é o Seu Nome?</p>
        <input placeholder="Nome" />
        <p>2. Qual Sua Idade?</p>
        <input placeholder="Nome" />
        <p>3. Qual é o Seu Email?</p>
        <input placeholder="Nome" />

        <p>4. Qual a sua escolaridade?</p>
        <select>
          <option>Ensino Medio Incompleto</option>
          <option>Ensino Medio Completo</option>
          <option>Ensino Superior Incompleto</option>
          <option>Ensino Superior Completo</option>
        </select>
        
      </form>
    </div>

  }
}

export default Etapa1;
