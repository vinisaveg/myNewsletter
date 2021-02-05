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
`;
