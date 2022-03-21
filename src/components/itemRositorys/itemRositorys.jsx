import React from "react";
import * as S from "./itemRositorysStyled";

const RepositoryItem = ({ name, linkToRepo, fullName ,language}) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>language: {language}</S.WrapperFullName>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;