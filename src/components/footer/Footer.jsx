import styled from 'styled-components';

// styles and images
import Logo from '../../assets/logo.png';

const Foot = styled.div`
  background-color: #221e1f;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;

  img {
    height: 40px;
    width: auto;
  }

  p {
    font-size: 0.8rem;
    color: #999;
  }
`;

export default function Footer() {
  return (
    <Foot>
      <div className='logo'>
        <img src={Logo} alt='Brandon Franks' />
      </div>
      <div className='text'>
        <p>© 2021 Brandon Franks</p>
      </div>
    </Foot>
  );
}
