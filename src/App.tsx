import React from "react";
import { Wrapper } from "./components/wrapper";
import { Header } from "./components/header";
import { MainSection } from "./components/main-section/main-section";

export const App: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Header/>
        <MainSection/>
      </Wrapper>
      
    </>
  )
}