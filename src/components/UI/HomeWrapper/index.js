import styled from "styled-components";

const Style = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const HomeWrapper = ({ children }) => {
  return <Style>{ children }</Style>;
};

export default HomeWrapper;

