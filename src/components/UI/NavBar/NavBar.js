import styled from "styled-components";

const Nav = styled.nav`
  background: ${(props) => props.theme.pastelTurquoise};
  color: ${(props) => props.theme.softGray};
  font-size: 2em;
  border: 1px solid #bbb;
  transition: all 0.3s linear;
  cursor: pointer;
  position: fixed;
  top: 0;
  width: 100%;
  &:hover {
    box-shadow:rgba(0,0,0,0.8) 0px 5px 15px, inset rgba(0,0,0,0.15) 0px -10px 20px;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  font-size: 0.7em;
`;

const NavBar = ({children}) => {
  return (
    <Nav>
      <Ul>{children}</Ul>
    </Nav>
  );
};

export default NavBar;
