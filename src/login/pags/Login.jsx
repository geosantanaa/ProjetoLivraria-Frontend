import React, { useState } from "react";
import logopngIMG from '../../assets/bookss.jpg';
import { Link, useHistory } from "react-router-dom";
import { LayoutComponentes } from "./LayoutComponentes";


export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const submit = (e) => {
      e.preventDefault();

      if (email.trim() === "" || password.trim() === "") {
        setError("Por favor, preencha todos os campos.");
      } else {
        const isAuthenticated = true;

        if (isAuthenticated) {
          history.push("/BookList");
        } else {
          setError("Credenciais inválidas. Por favor, tente novamente.");
        }
      }
    };

    return (
        <LayoutComponentes>
          <form className="login-form" onSubmit={submit}>
            <span className="login-form-title"> Bem vindos a Milk-Shakespeare! </span>

            <span className="login-form-title">
              <img src={logopngIMG} alt="Milk-Shakespeare" />
            </span>

            {error && <div className="error-message">{error}</div>}

            <div className="wrap-input">
              <input
                className={email !== "" ? "has-val input" : "input"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button type="submit" className="login-form-btn">
                Login
              </button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta? </span>
              <Link className="txt2" to="/register">
                Criar conta
              </Link>
            </div>
            <div className="text-center">
              <span className="txt3">Esqueceu sua senha?</span>
              <Link className="txt4" to="/NovaSenha">  
                Cadastrar nova senha            
              </Link>
            </div>
          </form>
        </LayoutComponentes>
    );
};







