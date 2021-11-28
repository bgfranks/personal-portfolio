// styles and images
import styled from 'styled-components';
import Brandon from '../../assets/bgfranks.jpg';
import { BsGithub, BsTwitter, BsFacebook } from 'react-icons/bs';

const AboutSection = styled.div`
  background-color: #000;
  height: 80vh;
  padding: 25px 25px;
  display: flex;
  flex-direction: column;
  color: #e5e5e5;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    padding-bottom: 30px;
  }

  .picture {
    width: 250px;
    height: auto;
    margin-bottom: 25px;

    img {
      width: 100%;
    }
  }

  .about-text {
    padding: 0 20px;
    line-height: 1.2rem;

    p {
      padding-bottom: 20px;
      color: #ddd;
    }
  }

  .about-icons {
    padding-top: 10px;

    .icon {
      padding: 0 10px;
      font-size: 1.5rem;
      color: #ddd;
      transition: all 0.3s;
    }

    .fb:hover {
      color: #4267b2;
    }

    .gh:hover {
      color: #bd2c00;
    }

    .tw:hover {
      color: #00acee;
    }
  }
`;

export default function About() {
  return (
    <AboutSection>
      <div className='section-title'>
        <h2>About Me</h2>
      </div>
      <div className='picture'>
        <img src={Brandon} alt='Brandon Franks' />
      </div>
      <div className='about-text'>
        <p>
          I am a front end web developer primarily focused on React and
          accessibility. I want to create products that any use can use no
          matter their limitations. The web is for everyone!
        </p>
        <p>
          In my personal life, I am a father of two. I enjoy writing music,
          playing guitar, gaming, and watching hockey.
        </p>
        <p>
          Please feel free to reach to me to ask about my work or anything you
          would like.
        </p>
      </div>
      <div className='about-icons'>
        <BsGithub className='icon gh' />
        <BsTwitter className='icon tw' />
        <BsFacebook className='icon fb' />
      </div>
    </AboutSection>
  );
}
