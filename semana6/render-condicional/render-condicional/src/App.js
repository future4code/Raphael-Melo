import React from 'react';
import Etapa1 from './Components/etapa1';
import Etapa2 from './Components/etapa2';
import Etapa3 from './Components/etapa3';
import Etapa4 from './Components/etapa4';
import CSS from './Components/App.css'


class App extends React.Component {
    state = {
      etapa:1,
    };

    let renderizaEtapa = () => {
      switch (setState.etapa) {
        case 'Etapa1':
          console.log('Oranges are $0.59 a pound.');
          break;


    render(){

        return(
        <div className="container">
          
          <button>Proxima etapa</button>  

          
        </div>
        )
    }
}

export default App;
