import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const ProjectStyles = styled.div`
  border: 1px solid var(--pop);
  color: var(--words);
  padding: 1rem 2rem;
  margin: 1rem auto;
  max-width: 1000px;

  ul {
    display: flex;
  }
  li {
    margin: 0 2rem;
    list-style: none;
    border-bottom: 1px solid var(--pop);
  }
`;

export default function Project({ allPost }) {
  return (
    <div>
      {allPost.map((project) => (
        <ProjectStyles key={project._id}>
          <a href={`https://${project.link}`} target="_blank">
            <h2>{project.title}</h2>
          </a>
          <BlockContent blocks={project.bodyRaw} />
          <ul>
            {project.categories?.map((category) => (
              <li key={category._id}>{category.title}</li>
            ))}
          </ul>
        </ProjectStyles>
      ))}
    </div>
  );
}
