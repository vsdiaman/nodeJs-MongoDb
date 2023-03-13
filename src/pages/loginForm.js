import React, { Component } from "react";
import "./style.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      password: "",
      confirmPassword: "",
      email: "",
      message: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.state({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault(); //é um método de complemento que pode ser usado para previnir a ação padrão do evento que estiver acontecendo.
    // const { username, password } = this.state;
    // enviar os dados para um servidor para autenticação
    // atualizar o estado "message" com base na resposta do servidor
    // Implemente aqui a lógica de envio dos dados do formulário para o servidor
  };

  render() {
    const { username, name, password, confirmPassword, email, message } =
      this.state;
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h2>Cadastro</h2>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => this.handleInputChange(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirmar senha:</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(event) => this.handleInputChange}
            />
          </div>
          <button type="submit">Cadastrar</button>
          {message && <div>{message}</div>}
        </form>
      </div>
    );
  }
}

export default LoginForm;
