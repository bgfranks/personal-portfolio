import styled from 'styled-components';

const NavBarItems = styled.ul`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  background: hsl(0 0% 0% / 0.5);
  height: 95vh;
  padding-top: 3.5rem;
  transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform 0.3s ease-in-out;

  li {
    padding: 25px 60px;
    color: #999;
    transition: all 0.3s;

    :hover {
      color: #e5e5e5;
    }
  }

  // tablet
  @media (min-width: 760px) {
    position: absolute;
    flex-direction: row;
    padding: 0;
    right: 33%;
    background: none;

    li {
      padding: 15px 30px 15px 0;
    }
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
