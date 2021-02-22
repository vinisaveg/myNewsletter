import React, { FunctionComponent, useState } from "react";

import { AppContext, InitialAppContext } from "../../../context/context";

import { Title, Wrapper } from "./styles";

import BaseInformation from "../BaseInformation/BaseInformation";
import LayoutSelection from "../LayoutSelection/LayoutSelection";
import LayoutForm from "../LayoutForm/LayoutForm";
import ActionButtons from "../ActionButtons/ActionButtons";
import Preview from "../Preview/Preview";
import UpdateModal from "../UpdateModal/UpdateModal";
import AppWrapper from "../AppWrapper/AppWrapper";

const Builder: FunctionComponent = () => {
  const appContext = useState(InitialAppContext);

  return (
    <AppContext.Provider value={appContext}>
      <Wrapper className="App">
        <AppWrapper>
          <Title>Hello myNewsletter!</Title>

          <BaseInformation />

          <LayoutSelection />

          <LayoutForm />

          <ActionButtons />
        </AppWrapper>
      </Wrapper>

      <UpdateModal />

      <Preview />
    </AppContext.Provider>
  );
};

export default Builder;
