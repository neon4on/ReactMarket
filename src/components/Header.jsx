import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;
  font-size: 18px;

  &:hover {
    color: #ff9800;
  }
`;

const Header = ({ isLoggedIn, onLogout }) => {
  return (
    <HeaderContainer>
      <Logo>KV_Market</Logo>
      <Nav>
        <NavLink to="/">Главная</NavLink>
        {isLoggedIn ? (
          <>
            <NavLink to="/cart">Корзина</NavLink>
            <NavLink to="/" onClick={onLogout}>
              Выход
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login">Вход</NavLink>
            <NavLink to="/register">Регистрация</NavLink>
          </>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
