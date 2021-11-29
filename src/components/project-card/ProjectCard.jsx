import styled from 'styled-components';

// styles
const Card = styled.div`
  background-color: #000;
  display: flex;
  flex-direction: column;
  height: 325px;
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

  // tiny phones
  @media (max-width: 350px) {
    height: 300px;

    .about-project {
      h3 {
        font-size: 1rem;
      }

      p {
        font-size: 0.8rem;
      }

      .btn {
        font-size: 0.8rem;
        margin: 0 10px 10px;
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
