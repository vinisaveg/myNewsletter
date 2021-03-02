import styled from "styled-components";

import { Button } from "../../../styles/shared/Button";

export const Wrapper = styled.div`
  position: relative;
  padding: 20px 0px;
  margin: 0 auto;
  text-align: center;

  .layout {
    position: relative;
  }
`;

export const DeleteLayoutButton = styled(Button)`
  display: block;
  position: absolute;
  right: 100px;
  top: 0;
  z-index: 10;
  max-width: 80px;
  padding: 10px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const UpdateLayoutButton = styled(DeleteLayoutButton)`
  right: 100px;
  top: 60px;
`;

export const UpDownButtonsWrapper = styled.div`
  display: block;
  display: flex;
  position: absolute;
  right: 100px;
  top: 120px;
  z-index: 10;
`;

export const UpDownButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  border-radius: 50%;
  text-align: center;
  color: #ffffff;
  background-color: #0078d7;
  transition: filter 150ms ease-in-out;
  cursor: pointer;
  margin-bottom: 30px;

  &:first-child {
    margin-right: 5px;
  }

  &:hover {
    filter: brightness(1.1);
  }

  @media screen and (max-width: 850px) {
    display: none;
  }
`;
