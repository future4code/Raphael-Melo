import React from 'react';


export class Home extends React.Component{
    state = {
        nameValue: "",
        emailValue: ""
    }

    OnChangeName = (event) => {
        this.setState({nameValue: event.target.value})
    }

    OnChangeEmail = (event) => {
        this.setState({emailValue: event.target.value})
    }

    OnClickCriar = () => {
        console.log(this.state.nameValue)
        console.log(this.state.emailValue)
    }
        
   render(){
        return (
        <div className="Home">
            <input placeholder="Nome" value={this.state.nameValue} onChange={this.OnChangeName}/>
            <input placeholder="Email" value={this.state.emailValue} onChange={this.OnChangeEmail} />
            <button onClick={this.OnClickCriar}>Entrar</button>
        </div>)
    }

}
   
export default Home;
