import styled from "styled-components";

interface ButtonProps {
  width?: string;
  color: string;
  bgColor?: string;
  padding?: Array<string>;
  margin?: Array<string>;
}

export const Button = styled.button<ButtonProps>`
  padding: ${(props) => props.padding?.join(" ") || 0};
  margin: ${(props) => props.margin?.join(" " || 0)};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor || "#222222"};
  box-sizing: border-box;
  width: 25%;
  height: 31px;
  text-align: center;
  font-size: 16px;
  line-height: 30px;
  border-radius: 6px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: 150ms opacity ease;

  &&:hover {
    opacity: 0.9;
  }

  @media screen and (max-width: 850px) {
    width: 100%;
    margin: 0;
  }
`;
