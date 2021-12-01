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
  backdrop-filter: blur(2rem);

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
  }

  // large tablets & laptops
  @media (min-width: 1020px) {
  }

  // Large Tablets and laptops
  @media (min-width: 1020px) {
    width: 25%;

    li {
      font-size: 1.2rem;
      padding-bottom: 50px;
      height: 10%;
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
