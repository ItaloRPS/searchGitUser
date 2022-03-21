import React, { useState } from "react";
import {useGithub}  from "../../hooks/userGithub";
import * as S from "./styleHeander";


const Header = () => {
const [username, setUsername] = useState();
const {getUser}  = useGithub()

const UserSearch =()=>{
    if (!username) return;
    return getUser(username)
}

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit" onClick={UserSearch}>
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;