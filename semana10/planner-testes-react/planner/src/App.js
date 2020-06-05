import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import Axios from 'axios';




const ContainerInputs = styled.div`
    text-align:center;
    padding: 20px 0; 
    display:flex;
    justify-content:center;
`;

const DivInput = styled.div`
    text-align:center;
    padding: 0 20px; 
`;


const ContainerTarefas = styled.div`
    text-align:center;
    height: 80vh;
    display:flex;
    justify-content:space-evenly;

`;

const DivTarefa = styled.div`
    border: 1px solid black;
    width: 13.7%;
    height: 100%;
    background-color:wheat;

`;


const ListaTarefas = styled.ul`
    color: purple;
    text-align:justify;
    

`;





export default function App() {
  const [inputTarefa, setTarefaValue] = useState("");
  const [selectDia, setelectValue] = useState("");
  const [tarefasAPI, setTarefasAPI] = useState(
  [
    {
      "dia": "quinta",
      "tarefa": "sssss",
      "id": "uroKMAVnZFRudLN7qXp1"
    }
  ]);

  const body = {
    tarefa: inputTarefa,
    dia: selectDia,
    id: Date.now()

  };

  const criarTarefa = () => {
    Axios.post('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-raphael-melo', body).then((response) => {
      setTarefaValue()
      setelectValue()
    });
  }

  const BuscarTarefas = () => {
    Axios.get('https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-julian-raphael-melo').then(response => {
      setTarefasAPI(response.data)
    });
  }


  useEffect(() => {
    BuscarTarefas()
    criarTarefa()
  }, []);
  
  const onChangeInput = event => {
    setTarefaValue(event.target.value);
  };

  const onChangeDia = event => {
    setelectValue(event.target.value);
  };


  const filtrarSegunda = function(setTarefasAPI){
    if(tarefasAPI.dia === "segunda"){
      return true;
    } else {
      return false;
    }
  } 

  const listaFinalSegunda = tarefasAPI.filter(filtrarSegunda)
  console.log(listaFinalSegunda)

  return (


    <div>
      <ContainerInputs>

        <DivInput>
          <label>Nova Tarefa: </label>
          <input
            type="text"
            onChange={onChangeInput}
            value={inputTarefa}
            width="100px"
          />
        </DivInput>


        <DivInput>
          <label>Dia da Semana: </label>

          <select
            type="text"
            onChange={onChangeDia}
            value={selectDia}
            width="100px"
          >
            <option value="nenhum">Nenhum</option>
            <option value="segunda">Segunda-feira</option>
            <option value="terca">Terça-feira</option>
            <option value="quarta">Quarta-feira</option>
            <option value="quinta">Quinta-feira</option>
            <option value="sexta">Sexta-feira</option>
            <option value="sabado">Sabado</option>
            <option value="domingo">Domingo</option>
          </select>

        </DivInput>

        <DivInput>
          <button
            onClick={criarTarefa}
          >Adicionar</button>
        </DivInput>


      </ContainerInputs>

      <ContainerTarefas>

        <DivTarefa>
          Segunda
          
        </DivTarefa>


        <DivTarefa>
          Terça
          </DivTarefa>

        <DivTarefa>
          Quarta
          </DivTarefa>

        <DivTarefa>
          Quinta
          </DivTarefa>

        <DivTarefa>
          Sexta
          </DivTarefa>

        <DivTarefa>
          Sabado
          </DivTarefa>
        <DivTarefa>
          Domingo
          </DivTarefa>


      </ContainerTarefas>

    </div>
  )
}

