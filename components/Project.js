import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const ProjectStyles = styled.div`
  position: relative;
  border-radius: 1em;
  color: var(--words);
  padding: 1rem 2rem;
  min-height: 400px;
  border: 1px solid var(--pop);
  box-shadow: 0 0 0.5em 0 var(--pop);
  transition: transform 0.3s;

  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 1em;
    box-shadow: 0 0 50px 2px var(--pop);
    opacity: 0;
    transition: all 0.3s;
    z-index: -1;
  }

  &:hover::after {
    opacity: 1;
  }
  h2 {
    position: relative;
    font-weight: 300;
  }
  h2::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 0;
    background: var(--words);
    bottom: 0px;
    left: 50%;
    transition: all 0.2s;
  }
  h2:hover::after {
    width: 100%;
    left: 0;
  }
  img {
    width: 100%;
    border: 1px solid var(--words);
  }
`;

export default function Project({ project }) {
  return (
    <ProjectStyles>
      <a href={`https://${project.link}`} target="_blank">
        <h2>{project.title}</h2>
      </a>
      <img src={project.mainImage?.asset.url} alt="" />
      <BlockContent blocks={project.bodyRaw} />
    </ProjectStyles>
  );
}
