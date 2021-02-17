import styled from "styled-components";

interface ButtonProps {
  width?: string;
  color: string;
  bgColor?: string;
  padding?: Array<string>;
  margin?: Array<string>;
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 24px;
  margin: ${(props) => props.margin?.join(" " || 0)};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor || "#222222"};
  box-sizing: border-box;
  width: ${(props) => props.width || "25%"};
  text-align: center;
  font-size: 16px;
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
    margin: 10px 0px;
  }
`;
