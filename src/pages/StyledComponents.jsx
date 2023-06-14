import React from "react";
import { styled } from "styled-components";

export default function StyledComponents() {
  return (
    <>
      <Title>안녕하세요</Title>
      <Button>Click me</Button>
    </>
  );
}

const Title = styled.h1`
  ${({ theme }) => theme.fonts.text}
`;

const Button = styled.button`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  border-radius: 0.5rem;

  font-family: KOTRAHOPE;

  color: rgb(255, 255, 255);
  background-color: rgb(166, 199, 239);

  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
`;
