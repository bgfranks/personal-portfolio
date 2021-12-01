import styled from 'styled-components';

// components
import Burger from './Burger';

// styles and images
import Logo from '../../assets/logo.png';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: #221e1f;
  padding: 0 20px;
  color: #ddd;

  .logo {
    img {
      height: 50px;
    }
  }

  // phone
  @media (min-width: 760px) {
    padding: 0 50px;
  }

  // Large Tablets and laptops
  @media (min-width: 1020px) {
    padding: 0 120px;
    height: 80px;

    .logo {
      img {
        height: 80px;
      }
    }
  }
`;

export default function Navbar() {
  return (
    <NavBar>
      <div className='logo'>
        <img src={Logo} alt='Brandon Franks Logo' />
      </div>
      <Burger />
    </NavBar>
  );
}
