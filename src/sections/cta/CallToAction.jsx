import styled from 'styled-components';

// Styles and Images
import Raleigh from '../../assets/raleigh.png';

const HeadSection = styled.div`
  background-color: #211e1f;
  height: 95vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${Raleigh});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 25px;
  color: #e5e5e5;

  .title {
    font-size: 3rem;
    padding-bottom: 30px;

    :first-child {
      padding-bottom: 10px;
    }
  }

  .job {
    font-size: 1.8rem;
    padding-bottom: 30px;
    color: #ddd;
    font-weight: 300;

    :first-child {
      padding-bottom: 10px;
    }
  }

  .btn {
    border: 2px solid #e5e5e5;
    background: transparent;
    width: 120px;
    color: #e5e5e5;
    padding: 10px 30px;
  }

  // tablets
  @media (min-width: 760px) {
    padding: 0 50px;

    .title {
      margin-bottom: 20px;

      p {
        font-size: 3.8rem;
        padding-right: 20px;
        display: inline;
      }
    }

    .job {
      font-size: 2.5rem;

      p {
        padding-bottom: 20px;
      }
    }

    .btn {
      font-size: 1.2rem;
      width: 140px;
    }
  }

  // larger screens
  @media (min-width: 1440px) {
    padding-inline: 130px;
  }
`;

export default function CallToAction() {
  return (
    <HeadSection>
      <div className='title'>
        <p>Brandon</p>
        <p>Franks</p>
      </div>
      <div className='job'>
        <p>Front End Web</p>
        <p>Developer</p>
      </div>
      <button className='btn'>My Work</button>
    </HeadSection>
  );
}
