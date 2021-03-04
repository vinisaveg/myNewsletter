import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  padding: 20px 0px;
  margin: 0 auto;
  text-align: center;
  max-width: 1200px;

  .layout {
    position: relative;
  }
`;

export const OptionsButtonWrapper = styled.div`
  display: block;
  display: flex;
  position: absolute;
  right: 20px;
  top: 0px;
  z-index: 10;
`;

export const UpDownButtonsWrapper = styled.div`
  display: block;
  display: flex;
  position: absolute;
  right: 100px;
  top: 0px;
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
