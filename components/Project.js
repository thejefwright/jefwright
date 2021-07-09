import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const ProjectStyles = styled.div`
  border: 1px solid var(--pop);
  color: var(--words);
  padding: 1rem 2rem;
  min-height: 400px;

  ul {
    display: flex;
  }
  li {
    margin: 0 2rem;
    list-style: none;
    border-bottom: 1px solid var(--pop);
  }
`;

export default function Project({ project }) {
  return (
    <ProjectStyles>
      <a href={`https://${project.link}`} target="_blank">
        <h2>{project.title}</h2>
      </a>
      <BlockContent blocks={project.bodyRaw} />
    </ProjectStyles>
  );
}
