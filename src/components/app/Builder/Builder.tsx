import React, { FunctionComponent, useState } from "react";

import { AppContext, InitialAppContext } from "../../../context/context";

import { Title, Wrapper } from "./styles";

import BaseInformation from "../BaseInformation/BaseInformation";
import LayoutSelection from "../LayoutSelection/LayoutSelection";
import LayoutForm from "../LayoutForm/LayoutForm";
import ActionButtons from "../ActionButtons/ActionButtons";
import Preview from "../Preview/Preview";
import UpdateModal from "../UpdateModal/UpdateModal";

const Builder: FunctionComponent = () => {
  const appContext = useState(InitialAppContext);

  return (
    <AppContext.Provider value={appContext}>
      <Wrapper className="App">
        <Title>Hello myNewsletter!</Title>

        <BaseInformation />

        <LayoutSelection />

        <LayoutForm />

        <ActionButtons />
      </Wrapper>

      <UpdateModal />

      <Preview />
    </AppContext.Provider>
  );
};

export default Builder;
