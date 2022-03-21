import styled from "styled-components";
import { Tabs, TabPanel } from "react-tabs";

export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;
`;

export const WrapperTabPanel = styled(TabPanel)`
  padding: 16px;
  border: 1px solid "#ccc";
  display: none;
  margin-top: -5px;
  &.is-selected {
    display: block;
  }
`;
export const WrapperList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;