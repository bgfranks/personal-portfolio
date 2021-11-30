import styled from 'styled-components';

// styles
const Card = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  .project-image {
    width: 100%;
    height: 200px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .about-project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #e5e5e5;
    text-align: center;

    h3 {
      font-size: 1.2rem;
      padding-bottom: 15px;
      padding-top: 20px;
    }

    p {
      padding: 0 20px 15px;
      font-size: 0.9rem;
      color: #ddd;
    }

    .btn {
      border: 2px solid #e5e5e5;
      background: #181617;
      width: 100px;
      color: #e5e5e5;
      font-size: 0.9rem;
      margin: 0 15px 20px;
      padding: 5px 0;

      a {
        text-align: center;
        text-decoration: none;
        color: #ddd;
      }
    }
  }

  //tiny phones
  @media (min-width: 300px) {
    height: 320px;
  }

  // small phones
  @media (min-width: 360px) {
    height: 280px;

    .project-image {
      height: 45%;
    }

    .about-project {
      h3 {
        font-size: 1rem;
      }

      p {
        font-size: 0.8rem;
      }

      .btn {
        font-size: 0.8rem;
        margin: 0 10px 20px;
      }
    }
  }

  // larger phones
  @media (min-width: 400px) {
    height: 330px;
  }

  // tablets
  @media (min-width: 760px) {
    flex-direction: row;
    height: 300px;
    margin: 0;

    :nth-child(2) {
      flex-direction: row-reverse;
    }

    .project-image {
      height: 100%;
      width: 135%;

      img {
        height: 100%;
        width: 100%;
        image-rendering: auto;
        image-rendering: crisp-edges;
        image-rendering: pixelated;
      }
    }

    .about-project {
      align-items: flex-start;
      text-align: left;
      padding-left: 20px;

      h3 {
        font-size: 1.5rem;
      }

      p {
        padding: 10px 20px 20px 0;
        font-size: 1rem;
        line-height: 1.3;
      }

      .btn {
        margin-left: 0;
        margin-right: 20px;
      }
    }
  }
`;

export default function ProjectCard({ title, imgUrl, about }) {
  return (
    <Card>
      <div className='project-image'>
        <img src={imgUrl} alt='The Dojo' />
      </div>
      <div className='about-project'>
        <div className='text'>
          <h3>{title}</h3>
          <p>{about}</p>
        </div>
        <div className='project-buttons'>
          <button className='btn'>GitHub</button>
          <button className='btn'>Website</button>
        </div>
      </div>
    </Card>
  );
}
