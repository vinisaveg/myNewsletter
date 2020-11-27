import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  padding: 25px 0px;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    width: 90%;
  }
`;

export const ExportButton = styled.a`
  padding: 10px 24px;
  margin: 12px !important;
  color: white;
  background-color: #f5476a;
  box-sizing: border-box;
  width: 25%;
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
    margin: 0;
  }
`;
