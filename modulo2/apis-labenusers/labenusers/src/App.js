import './App.css';
import React from 'react';
import CreateUser from './Paginas/PaginaCriar';
import PaginaSearch from './Paginas/PaginaSearch';
import axios from 'axios';

const allUsers = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

const headers = {
  headers: {
    Authorization: "tacio-passabao-shaw"
  }
}



class App extends React.Component {

  state = {
    etapa: 1,
    users: [],
    userInput: "",
    emailInput: ""

  }
  componentDidMount(){
    this.getAllUsers()
  }

  getAllUsers= ()=>{
    axios
    .get(allUsers,headers)
    .then((res)=>{
      this.setState({users: res.data.result.list})
      console.log(res.data)
    })
    .catch((err)=>{
      alert(err.response.data.message)
    })
  }

  createUser = () => {
    const body = {
      name: this.state.userInput,
      email: this.state.emailInput
    }
    axios
      .post(allUsers, body, headers)
      .then(() => {
        this.getAllUsers()
        this.setState({ userInput: "" })
        this.setState({ emailInput: "" })
        alert("Usuário cadastrado com sucesso")
          .catch((err) => {
            alert(err.response.data.message)
          })
      })
    this.setState({ userInput: "" })
    this.setState({ emailInput: "" })
  }

  onUserTextChange = (event)=>{
    this.setState({userInput: event.target.value})
  }

  onEmailTextChange = (event)=>{
    this.setState({emailInput: event.target.value})
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <CreateUser />;
      case 2:
        return <PaginaSearch />;
      case 3:
        this.setState({ etapa: this.state.etapa = 1 })
        return <CreateUser />;
      default:
        return <PaginaSearch />
    }
  }

  mudandoPagi = () => {
    this.setState({ etapa: this.state.etapa + 1 })
  }

  render() {
    
    return (

      <div>
        
        <br />
        {this.state.etapa !== 3 && <button onClick={this.mudandoPagi}>Trocar de tela</button>}
        <br />
        {this.renderizaEtapa()}



      </div>
    )
  }

}

export default App;