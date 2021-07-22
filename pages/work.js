import styled from 'styled-components';
import Project from '../components/Project';
import sanity from '../client';
import groq from 'groq';

const WorkStyles = styled.div`
  height: 100vh;
  width: 80%;
  margin: 0 auto;
  font-size: 2rem;
  color: var(--words);
  h1 {
    font-size: 5rem;
  }
  hr {
    margin: 5rem 0;
    border: 0;
    height: 1px;
    background: var(--words);
    background-image: linear-gradient(
      to right,
      var(--background),
      var(--words),
      var(--background)
    );
  }
`;

const ProjectGridStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 2rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  }
`;

const ListStyles = styled.ul`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  max-width: 50%;
  li {
    list-style: none;
    padding: 2rem;
    transition: all 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 800px) {
    font-size: 1.75rem;
    max-width: 80%;
  }
  @media (max-width: 500px) {
    font-size: 1.5rem;
    max-width: 100%;
  }
`;
export default function Work({ projects, categories }) {
  return (
    <WorkStyles>
      <h1>Featured Projects</h1>
      <ProjectGridStyles>
        {projects.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </ProjectGridStyles>
      <hr />
      <div>
        <p>Currently working on: </p>
        <ul>
          <li>
            Inventory management app with a dedicated backend and pulling info
            from the Shopify admin api.{' '}
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <p>Other projects I've built include: </p>
        <ul>
          <li>Headless Wordpress</li>
          <li>Headless Shopify ( I ❤️ headless )</li>
          <li>Food cost tracking app</li>

          <li>
            Lots of regular custom shopify, wordpress, and squarspace sites.{' '}
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <p>Other tech I've used/like to use: </p>
        <ListStyles>
          {categories.map((category) => (
            <li key={category._id}>{category.title}</li>
          ))}
        </ListStyles>
      </div>
    </WorkStyles>
  );
}

export async function getStaticProps() {
  const query = groq`
  {
    "projects": *[_type == 'post'],
    "categories": *[_type == 'category']
  }
  `;

  const data = await sanity.fetch(query);

  return {
    props: {
      projects: data.projects,
      categories: data.categories,
    },
  };
}
