import styled from 'styled-components';

const NavBarItems = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #181617;
  opacity: 0.7;
  height: 95vh;
  padding-top: 3.5rem;
  transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;

  li {
    padding: 25px 60px;
  }
`;

export default function NavItems({ open }) {
  return (
    <NavBarItems open={open}>
      <li>Home</li>
      <li>Projects</li>
      <li>About</li>
    </NavBarItems>
  );
}
