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
  overflow-x: hidden;

  .logo {
    img {
      height: 50px;
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
