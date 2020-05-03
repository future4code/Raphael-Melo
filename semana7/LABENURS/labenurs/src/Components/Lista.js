import React from 'react';


export class Lista extends React.Component{
    State = {

        usersList: [
            {
                "id": "s4s4s5dssssss88s8s8s", 
                "nome": "Pharrell Williams",
            }
            
        ]
    }
   render(){
        return (
        <div>
            <h2>Lista de Usuarios</h2>
                {this.state.usersList.map((user) => {
                    return <div>
                        <p>{user.name}</p>
                        <button>Apagar</button>
                    </div>
                })}
        </div>
        )
    }

}
   
export default Lista;
