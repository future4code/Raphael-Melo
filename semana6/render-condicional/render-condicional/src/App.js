import React from 'react';
import Etapa1 from './Components/etapa1';
import Etapa2 from './Components/etapa2';
import Etapa3 from './Components/etapa3';
import Etapa4 from './Components/etapa4';
import CSS from './Components/App.css'


class App extends React.Component {
    state = {};


    render(){

        return(
        <div className="container">
          <Etapa1></Etapa1>
          <Etapa2></Etapa2>
          <Etapa3></Etapa3>
          <Etapa4></Etapa4>
          <button>Proxima etapa</button>  

          
        </div>
        )
    }
}

export default App;
