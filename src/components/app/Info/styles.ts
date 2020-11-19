import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 25%;
  height: 30px;
  box-sizing: border-box;
  padding: 4px;
  margin: 0px 10px;
  border-radius: 6px;
  outline-color: #f5476a;
  outline-offset: 0px;
  border: none;

  @media screen and (max-width: 850px) {
    width: 100%;
    margin: 10px 0px;
  }
`;
