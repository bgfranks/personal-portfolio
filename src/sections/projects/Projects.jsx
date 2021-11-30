import styled from 'styled-components';

// components
import ProjectCard from '../../components/project-card/ProjectCard';

// styles and images
import TheDojo from '../../assets/the-dojo.png';
import Expensely from '../../assets/expensely.png';

const ProjectContainer = styled.div`
  background-color: #181617;
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

  // tiny phones
  @media (min-width: 300px) {
    height: 140vh;

    .title {
      padding: 20px 0 0;

      h2 {
        font-size: 1.2rem;
      }
    }
  }

  // smmall phones
  @media (min-width: 360px) {
    height: 120vh;

    .title {
      padding: 20px 0 0;

      h2 {
        font-size: 1.2rem;
      }
    }
  }

  // normal phone
  @media (min-width: 375px) {
    height: 100vh;
  }

  // larger phones
  @media (min-width: 400px) {
    height: 110vh;
  }

  // tablets
  @media (min-width: 760px) {
    height: 72vh;
    padding: 0 50px;

    .title {
      padding: 30px 0 20px;

      h2 {
        font-size: 2rem;
      }
    }
  }
`;

// card data
const projects = [
  {
    title: 'The Dojo',
    imgUrl: TheDojo,
    about:
      'Project Management application using React, React Router, Context API, Custom Hooks, Firebase Auth, and Firestore',
    id: Math.random(),
  },
  {
    title: 'Expensely',
    imgUrl: Expensely,
    about:
      'Expense tracking application using React, Sass, React Router, Context API, Custom Hooks, Firebase Auth, and Firestore',
    id: Math.random(),
  },
];

export default function Projects() {
  return (
    <ProjectContainer>
      <div className='title'>
        <h2>Projects</h2>
      </div>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          imgUrl={project.imgUrl}
          about={project.about}
          title={project.title}
        />
      ))}
    </ProjectContainer>
  );
}
