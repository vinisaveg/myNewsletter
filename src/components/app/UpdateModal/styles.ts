import styled from "styled-components";

export const Wrapper = styled.form`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;
  width: 250px;
  border-radius: 8px;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f2f2f2;
  z-index: 100;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding: 6px;
  margin: 7px 10px;
  border-radius: 6px;
  outline-color: #f5476a;
  outline-offset: 0px;
  border: none;

  @media screen and (max-width: 850px) {
    width: 100%;
    margin: 10px 0px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
