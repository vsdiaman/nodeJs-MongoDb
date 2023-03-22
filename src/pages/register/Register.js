import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

class Register extends Component {
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
      <div class="container">
        <div class="forms">
          <div class="form login">
            <span class="title">Registration</span>

            <form onSubmit={this.handleSubmit} action="#">
              <div class="input-field">
                <input
                  value={name}
                  type="text"
                  placeholder="Enter your name"
                  required
                />
                <FontAwesomeIcon className="i" icon={faUser} size="sm" />
                {/* <i class="uil uil-envelope icon"></i> */}
              </div>
              <div class="input-field">
                <input
                  value={email}
                  type="text"
                  placeholder="Enter your email"
                  required
                />
                <FontAwesomeIcon className="i" icon={faEnvelope} size="sm" />
                {/* <i class="uil uil-envelope icon"></i> */}
              </div>
              <div class="input-field">
                <input
                  value={password}
                  type="password"
                  class="password"
                  placeholder="Enter your password"
                  required
                />
                <FontAwesomeIcon className="i" icon={faLock} />
                <i class="uil uil-lock icon"></i>
                <i class="uil uil-eye-slash showHidePw"></i>
              </div>

              <div class="input-field button">
                <input type="button" value="Signup" />
              </div>
            </form>

            <div class="login-signup">
              <span class="text">
                Already have an account?
                <a href="/login" class="text signup-link">
                  Login Now
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      // <div class="container">
      //   <div class="forms">
      //     {/* Registration Form */}
      //     <div class="form signup">
      //       <span class="title">Registration</span>
      //       {message && <div>{message}</div>}
      //       <form action="#">
      //         <div class="input-field">
      //           <input
      //             value={name}
      //             type="text"
      //             placeholder="Enter your name"
      //             required
      //           />
      //           <i class="uil uil-user"></i>
      //         </div>
      //         <div class="input-field">
      //           <input type="text" placeholder="Enter your email" required />
      //           <i class="uil uil-envelope icon"></i>
      //         </div>
      //         <div class="input-field">
      //           <input
      //             value={password}
      //             type="password"
      //             class="password"
      //             placeholder="Create a password"
      //             required
      //           />
      //           <i class="uil uil-lock icon"></i>
      //         </div>
      //         <div class="input-field">
      //           <input
      //             value={confirmPassword}
      //             type="password"
      //             class="password"
      //             placeholder="Confirm a password"
      //             required
      //           />
      //           <i class="uil uil-lock icon"></i>
      //           <i class="uil uil-eye-slash showHidePw"></i>
      //         </div>

      //         <div class="checkbox-text">
      //           <div class="checkbox-content">
      //             <input type="checkbox" id="termCon" />
      //             <label for="termCon" class="text">
      //               I accepted all terms and conditions
      //             </label>
      //           </div>
      //         </div>

      //         <div class="input-field button">
      //           <input type="button" value="Signup" />
      //         </div>
      //       </form>

      //       <div class="login-signup">
      //         <span class="text">
      //           Already a member?
      //           <a href="#" class="text login-link">
      //             Login Now
      //           </a>
      //         </span>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default Register;
