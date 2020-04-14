import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://i.imgur.com/ThzZOMq.jpg" 
          nome="Raphael Melo" 
          descricao="Oi, eu sou o Raphael Melo. Sou aluno da Labenu. Adoro estudar programação de segunda a sexta-feira nessa insana ex"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://app.livetalk.ai/bots/1474520602/avatar" 
          nome="Factual Imoveis" 
          descricao="Realizando sonhos com a intermediação de imóveis na praia!" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQEEb11z0BSwlg/company-logo_200_200/0?e=2159024400&v=beta&t=HpXiliMOYmioK8Is6nlvOgI0iZhGTyLfXFk1_zU9vTA" 
          nome="Lopes Imobiliária" 
          descricao="Consultória imobiliária." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
