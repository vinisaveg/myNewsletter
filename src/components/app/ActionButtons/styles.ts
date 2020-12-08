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
