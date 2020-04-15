import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />  
        <Post
          nomeUsuario={'darvas'}
          fotoUsuario={'https://picsum.photos/50/50/?a=2'}
          fotoPost={'https://picsum.photos/200/150/?a=5'}
        />
        <Post
          nomeUsuario={'joão'}
          fotoUsuario={'https://picsum.photos/50/50/?a=1'}
          fotoPost={'https://picsum.photos/200/150/?a=3'}
        />
      </div>
 
    );
  }
}

export default App;
