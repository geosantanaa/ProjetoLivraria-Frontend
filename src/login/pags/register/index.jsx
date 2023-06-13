import React, { useState } from 'react';
import { LayoutComponentes } from '../LayoutComponentes';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const submit = (e) => {
    e.preventDefault();

    if (email.trim() === '' || password.trim() === '' || name.trim() === '') {
      setError('Por favor, preencha todos os campos.');
    } else {
      // Lógica para enviar o formulário
    }
  };

  return (
    <LayoutComponentes>
      <form className="login-form" onSubmit={submit}>
        <span className="login-form-title">Criar Conta</span>

        {error && <div className="error-message">{error}</div>}

        <div className="wrap-input">
          <input
            className={name !== '' ? 'has-val input' : 'input'}
            type="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={email !== '' ? 'has-val input' : 'input'}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== '' ? 'has-val input' : 'input'}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Password"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn" type="submit">
            Cadastrar
          </button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Fazer login
          </Link>
        </div>
      </form>
    </LayoutComponentes>
  );
};

export default Register;