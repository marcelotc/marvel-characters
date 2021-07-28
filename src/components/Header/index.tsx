import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logoMarvel from '../../assets/icons/logo-marvel.svg';

import {
    Container,
    Menu,
    MenuResponsive
  } from './styles';

export function Header() {
  const [hide, setHide] = useState(false);
  

  return (
    <Container>
        <div>
            <img src={logoMarvel} alt="Logo marvel" />
            <FaBars onClick={() => setHide(!hide)} />
        </div>
        <Menu>
            <p>FILMES</p>
            <p>QUADRINHOS</p>
            <p>PROGRAMAS DE TV</p>
            <p>JOGOS</p>
        </Menu>
        <MenuResponsive hide={hide}>
            <p>FILMES</p>
            <p>QUADRINHOS</p>
            <p>PROGRAMAS DE TV</p>
            <p>JOGOS</p>
        </MenuResponsive>
    </Container>
  );
}
