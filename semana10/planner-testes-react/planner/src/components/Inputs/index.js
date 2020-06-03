import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';


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



export default function Inputs() {


    const [inputTarefa, setInputTarefa] = useState("");
    const [selectDia, setSelectDia] = useState("");


    const onChangeInput = event => {
        setInputTarefa(event.target.value);
    };

    const onChangeDia = event => {
        setSelectDia(event.target.value);
    };



  const onClickAdicionar = () => {
    const novaTarefa= {
      tarefa: inputTarefa,
      dia: selectDia,
      id: Date.now()
      
    };

    console.log(novaTarefa);

    setInputTarefa("");
    setSelectDia("");
  };
    


    return (
        <main>
            <ContainerInputs>

                <DivInput>
                    <label>Nova Tarefa: </label>
                    <input
                        type="text"
                        onChange={onChangeInput}
                        value={inputTarefa}
                        width="100px" />
                </DivInput>


                <DivInput>
                    <label>Dia da Semana: </label>

                    <select 
                       type="text"
                       onChange={onChangeDia}
                       value={selectDia}
                       width="100px"
                    >
                        <option>Segunda-feira</option>
                        <option>Terça-feira</option>
                        <option>Quarta-feira</option>
                        <option>Quinta-feira</option>
                        <option>Sexta-feira</option>
                        <option>Sabado</option>
                        <option>Domingo</option>
                    </select>
                    
                 </DivInput>

                <DivInput>
                    <button
                    onClick={onClickAdicionar}
                    >Adicionar</button>
                </DivInput>


            </ContainerInputs>
        </main>
    )
}
