// styles and images
import styled from 'styled-components';
import Brandon from '../../assets/bgfranks.jpg';
import { BsGithub, BsTwitter, BsFacebook } from 'react-icons/bs';

const AboutSection = styled.div`
  background-color: #000;
  padding: 25px 25px;
  color: #e5e5e5;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    padding-bottom: 30px;
  }

  .about-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .picture {
      width: 200px;
      height: auto;
      margin-bottom: 25px;

      img {
        width: 100%;
      }
    }

    .about-text {
      padding: 0 20px;
      line-height: 1.1rem;

      p {
        padding-bottom: 15px;
        color: #ddd;
      }
    }

    .about-icons {
      padding-top: 10px;

      .icon {
        padding: 0 10px;
        font-size: 1.3rem;
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
  }

  // tiny phones
  @media (min-width: 300px) {
    height: 120vh;
  }

  // small phones
  @media (min-width: 360px) {
    height: 80vh;

    h2 {
      font-size: 1.2rem;
    }

    .about-text {
      line-height: 1rem;

      p {
        font-size: 0.8rem;
      }
    }

    .about-icons {
      .icon {
        font-size: 1.2rem;
      }
    }
  }

  // normal phones
  @media (min-width: 375px) {
    height: 75vh;

    img {
      height: 180px;
    }
  }

  // larger phones
  @media (min-width: 400px) {
    height: 68vh;
  }

  // tablets
  @media (min-width: 760px) {
    height: 30vh;
    text-align: left;
    padding: 50px 50px;

    h2 {
      font-size: 2rem;
      padding: 0;
    }

    .about-container {
      flex-direction: row-reverse;

      .picture {
        width: 100%;
        height: auto;

        img {
          width: 100%;
          height: auto;
        }
      }

      .about-text {
        padding: 0 50px 0 0;

        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  // Large tablets & laptops
  @media (min-width: 1020px) {
    height: 35vh;
  }

  // Large Tablets and laptops
  @media (min-width: 1020px) {
    height: 100vh;
    padding-inline: 250px;

    h2 {
      padding: 50px 0;
    }

    .about-container {
      justify-content: space-around;
      align-items: flex-start;

      .picture {
        width: 40%;

        img {
          width: 100%;
        }
      }
    }

    .about-content {
      padding-bottom: 20%;
      width: 60%;

      .about-text {
        width: 60%;
        p {
          font-size: 1.5rem;
          line-height: 1.3;
          padding-bottom: 50px;
        }
      }

      .about-icons {
        padding-top: 50px;
        .icon {
          font-size: 2rem;
        }
      }
    }
  }

  // XL screens
  @media (min-width: 1660px) {
    padding-inline: 280px;
    height: 65vh;

    h2 {
      font-size: 2.5rem;
    }

    .about-container {
      .picture {
        width: 30%;
        padding-right: 10%;
      }
    }
  }
`;

export default function About() {
  return (
    <AboutSection>
      <h2>About Me</h2>
      <div className='about-container'>
        <div className='picture'>
          <img src={Brandon} alt='Brandon Franks' />
        </div>
        <div className='about-content'>
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
              Please feel free to reach to me to ask about my work or anything
              you would like.
            </p>
          </div>
          <div className='about-icons'>
            <BsGithub className='icon gh' />
            <BsTwitter className='icon tw' />
            <BsFacebook className='icon fb' />
          </div>
        </div>
      </div>
    </AboutSection>
  );
}
