import styled from 'styled-components';

// components
import ProjectCard from '../../components/project-card/ProjectCard';

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

  // tiny phones
  @media (max-width: 350px) {
    height: 130vh;

    .title {
      padding: 20px 0 0;

      h2 {
        font-size: 1.2rem;
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
