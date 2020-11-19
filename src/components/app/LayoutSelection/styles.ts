import styled from "styled-components";

export const Wrapper = styled.form`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  margin: 0 auto;
  padding: 25px 0px;

  @media screen and (max-width: 850px) {
    width: 90%;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  padding: 4px;
  margin: 0px 10px;
  border-radius: 6px;
  background-color: #ffffff;
  outline-color: #f5476a;
  outline-offset: 0px;
  border: none;
`;

export const Option = styled.option`
  padding: 4px;
`;
