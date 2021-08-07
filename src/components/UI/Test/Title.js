import styled from "styled-components";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.primary ? "white" : "palevioletred")};
  background: ${(props) => (props.primary ? props.theme.primaryBlack : "papayawhip")};
`;

const TomatoTitle = styled(Title)`
  color: tomato;
  border-color: tomato;
`;

const TextTitle = () => {
  return (
    <>
      <Title>Hello World!</Title>
      <TomatoTitle primary>Hello Tomato World!</TomatoTitle>
    </>
  );
};

export default TextTitle;
