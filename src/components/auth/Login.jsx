import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import axios from 'axios';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const LoginTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const LoginInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const LoginButton = styled.button`
  padding: 10px;
  background-color: #ff9800;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/login', { email, password });
      toast.success('Вход выполнен успешно');
      onLogin();
      navigate('/');
    } catch (error) {
      toast.error('Ошибка при входе');
    }
  };

  return (
    <LoginContainer>
      <LoginTitle>Вход</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <LoginInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <LoginInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoginButton type="submit">Войти</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
