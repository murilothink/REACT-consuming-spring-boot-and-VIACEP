import React, {Component} from 'react';

class App extends Component {
  constructor() {
  super()
  this.state = {
   contacts: [],
   teste: []
  }
 }

    componentDidMount() {
        fetch('https://viacep.com.br/ws/01001000/json/')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log);

            fetch('http://localhost:8080/greeting')
            .then(res => res.json())
            .then((data) => {
                this.setState({ teste: data })
            })
            .catch(console.log);
    }

    

        render() {
          const contacts = this.state.contacts;
          const teste = this.state.teste;
            return (
              <div>
              <h1>API REST</h1>
              <span style={{fontWeight:'bold'}}>Id 8080: {teste.id} </span>
              <br></br>
              <span style={{fontWeight:'bold'}}>Id 8080: {teste.content} </span>
              <br></br>
              <br></br>
              <br></br>
              <h1>Correios</h1>
              <span style={{fontWeight:'bold'}}>CEP: {contacts.cep} </span>
              <br></br>
              <span style={{fontWeight:'bold'}}>Cidade: {contacts.localidade} </span>
              <br>
              </br>
              <span style={{fontWeight:'bold'}}>Bairro: {contacts.bairro} </span>
              <br>
              </br>
              <span style={{fontWeight:'bold'}}>uf: {contacts.uf} </span>
              <br>
              </br>
              <span style={{fontWeight:'bold'}}>ibge: {contacts.ibge} </span>
              <br>
              </br>
              <span style={{fontWeight:'bold'}}>gia: {contacts.gia} </span>
              
              </div>  
              
            );

            
        }
  }

export default App;