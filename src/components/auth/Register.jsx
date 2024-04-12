import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import axios from 'axios';

const RegisterContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const RegisterTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const RegisterInput = styled.input`
  padding: 10px;
  margin-bottom: 10px;
`;

const RegisterButton = styled.button`
  padding: 10px;
  background-color: #ff9800;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/auth/register', { username, email, password });
      toast.success('Регистрация успешна');
      navigate('/login');
    } catch (error) {
      toast.error('Ошибка при регистрации');
    }
  };

  return (
    <RegisterContainer>
      <RegisterTitle>Регистрация</RegisterTitle>
      <RegisterForm onSubmit={handleSubmit}>
        <RegisterInput
          type="text"
          placeholder="Имя пользователя"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <RegisterInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <RegisterInput
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <RegisterButton type="submit">Зарегистрироваться</RegisterButton>
      </RegisterForm>
    </RegisterContainer>
  );
};

export default Register;
