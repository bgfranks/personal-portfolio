import styled from 'styled-components';

const NavBarItems = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #181617;
  opacity: 0.7;
  height: 25%;

  li {
    padding: 25px 60px;
  }

  @media screen and (max-width: 320px) {
    height: 35%;
  }
`;

export default function NavItems() {
  return (
    <NavBarItems>
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
      </ul>
    </NavBarItems>
  );
}
