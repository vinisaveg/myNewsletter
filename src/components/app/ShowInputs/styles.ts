import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const Input = styled.input`
  width: 25%;
  height: 30px;
  box-sizing: border-box;
  padding: 6px;
  margin: 7px 1px;
  border-radius: 6px;
  outline-color: #f5476a;
  outline-offset: 0px;
  border: none;

  @media screen and (max-width: 850px) {
    width: 100%;
    margin: 10px 0px;
  }
`;
