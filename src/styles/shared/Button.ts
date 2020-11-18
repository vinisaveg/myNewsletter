import styled from "styled-components";

interface ButtonProps {
  color: string;
  bgColor?: string;
  padding?: Array<string>;
}

export const Button = styled.a<ButtonProps>`
  padding: ${(props) => props.padding?.join(" ") || "10px 16px"};
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor || "#222222"};
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  transition: 150ms opacity ease;

  &&:hover {
    opacity: 0.97;
  }
`;
