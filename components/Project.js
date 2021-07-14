import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const ProjectStyles = styled.div`
  position: relative;
  border-radius: 1em;
  color: var(--words);
  padding: 1rem 2rem;
  min-height: 400px;
  border: 1px solid var(--pop);
  box-shadow: inset 0 0 0.5em 0 var(--pop), 0 0 0.5em 0 var(--pop);

  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 1em;
    box-shadow: 0 0 5em 0.125em var(--pop);
    opacity: 0;
    transition: all 0.3s;
  }
  &:hover::after {
    opacity: 1;
  }

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
