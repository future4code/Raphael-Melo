import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  state = {
    posts: [
     
      {
        nome: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'   
      },
      {
        nome: 'João',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/151'
      },
      {
        nome: 'Amanda',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/152'
      }
    ]
  }
  render() {
    const listaPosts = this.state.posts.map(post => {
     
      
      return (
        <p>
          {post.nome} - {post.email} - {post.fone}
        </p>
      );
    });






    return (
      <div className={'app-container'}>
       
        {listaPosts}
     
      </div>
    );
  }
}

export default App;
