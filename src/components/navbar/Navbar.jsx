import { useState } from 'react';

// styles and images
import './Navbar.scss';
import Logo from '../../assets/logo.png';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

export default function Navbar() {
  const [navOpened, setNavOpened] = useState(false);

  const toggleNavMenu = () => {
    setNavOpened(!navOpened);
  };

  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src={Logo} alt='Brandon Franks Logo' />
      </div>

      {!navOpened && (
        <BiMenu
          className='mobile-nav'
          size='30px'
          color='#e5e5e5'
          onClick={toggleNavMenu}
        />
      )}
      {navOpened && (
        <IoClose
          className='mobile-nav'
          size='30px'
          color='#e5e5e5'
          onClick={toggleNavMenu}
        />
      )}
      <div className='nav-items'>
        {navOpened && (
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        )}
      </div>
    </div>
  );
}
