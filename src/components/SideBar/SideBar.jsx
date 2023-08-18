import React from "react";
import { styled } from "styled-components";
import Logo from "./Logo";
import TopMenus from "./TopMenus";
import BottomMenus from "./BottomMenus";

const SideBar = () => {
  return (
    <Root>
      <Logo />
      <MainMenuArea>
        <TopMenus />
      </MainMenuArea>
      <BottomMenus />
    </Root>
  );
};

export default SideBar;

const Root = styled.div`
  width: 300px;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const MainMenuArea = styled.div`
    flex: 1;
`
