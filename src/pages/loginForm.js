import React, { Component } from "react";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.state({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //é um método de complemento que pode ser usado para previnir a ação padrão do evento que estiver acontecendo.
    const { username, password } = this.state;
    // enviar os dados para um servidor para autenticação
    // atualizar o estado "message" com base na resposta do servidor
  };

  render() {
    const { username, password, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <labe htmlFor="username">Nome de Usuário:</labe>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="password">Senha:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
        </div>
        <button type="submit">Entrar</button>
        {message && <div>{message}</div>}
      </form>
    );
  }
}

export default LoginForm;
