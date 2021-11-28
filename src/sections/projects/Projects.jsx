import styled from 'styled-components';

// styles and images
import TheDojo from '../../assets/the-dojo.png';
import Expensely from '../../assets/expensely.png';

const ProjectContainer = styled.div`
  background-color: #181617;
  height: 100vh;
  padding: 0 25px;
  display: flex;
  align-items: center;
  flex-direction: column;

  .title {
    display: block;
    padding: 20px 0;

    h2 {
      text-align: center;
      color: #e5e5e5;
      font-size: 1.5rem;
    }
  }

  .card {
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
  }
`;

// card data
const ProjectsData = [
  {
    title: 'The Dojo',
    imgUrl: TheDojo,
    about:
      'Project Management application using React, React Router, Context API, Custom Hooks, Firebase Auth, and Firestore',
  },
  {
    title: 'Expensely',
    imgUrl: Expensely,
    about:
      'Expense tracking application using React, Sass, React Router, Context API, Custom Hooks, Firebase Auth, and Firestore',
  },
];

export default function Projects() {
  return (
    <ProjectContainer>
      <div className='title'>
        <h2>Projects</h2>
      </div>
      <div className='card'>
        <div className='project-image'>
          <img src={TheDojo} alt='The Dojo' />
        </div>
        <div className='about-project'>
          <div className='text'>
            <h3>The Dojo</h3>
            <p>
              Project Management application using React, React Router, Context
              API, Custom Hooks, Firebase Auth, and Firestore
            </p>
          </div>
          <div className='project-buttons'>
            <button className='btn'>GitHub</button>
            <button className='btn'>Website</button>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='project-image'>
          <img src={Expensely} alt='Expensely' />
        </div>
        <div className='about-project'>
          <div className='text'>
            <h3>Expensely</h3>
            <p>
              Expense tracking application using React, Sass, React Router,
              Context API, Custom Hooks, Firebase Auth, and Firestore
            </p>
          </div>
          <div className='project-buttons'>
            <button className='btn'>
              <a href='#'>GitHub</a>
            </button>
            <button className='btn'>
              <a href='#'>Website</a>
            </button>
          </div>
        </div>
      </div>
    </ProjectContainer>
  );
}
