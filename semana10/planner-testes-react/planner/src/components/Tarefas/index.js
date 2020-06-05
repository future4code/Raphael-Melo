import React from 'react'
import styled from 'styled-components';



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


export default function index(props) {
    return (
        <ContainerTarefas>
            <DivTarefa>
                <div>
                Segunda
                </div>
                <ListaTarefas>

                <li>Lavar Louça</li>

                        
                </ListaTarefas>
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
    )
}
