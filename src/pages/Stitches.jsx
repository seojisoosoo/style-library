// import { styled } from "@stitches/react";
import React from "react";

import { styled } from "../../stitches.config";

export default function Stitches() {
  return (
    <>
      <Title>안녕하세요</Title>
      <Button color="blue">Click me</Button>
    </>
  );
}

// const Title = styled.h1`
//   ${({ theme }) => theme.fonts.text}
// `;

// const Button = styled.button`
//   padding-left: 1rem;
//   padding-right: 1rem;
//   padding-top: 0.5rem;
//   padding-bottom: 0.5rem;

//   border-radius: 0.5rem;

//   font-family: KOTRAHOPE;

//   color: rgb(255, 255, 255);
//   background-color: rgb(166, 199, 239);

//   box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
// `;

const Title = styled("h1", {
  fontFamily: "$kotra",
  fontSize: "$6",
  lineHeight: "$1",
});

const Button = styled("button", {
  variants: {
    color: {
      blue: { backgroundColor: "$blue", color: "#ffffff" },
    },
  },

  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  borderRadius: "0.5rem",
  boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  fontFamily: "$kotra",
});
