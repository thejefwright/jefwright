import styled from 'styled-components';

const ProjectStyles = styled.div`
  height: 100vh;
  width: 100%;
  font-size: 2rem;
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  color: var(--words);
`;

export default function Projects() {
  return (
    <ProjectStyles>
      <h1>Look at all the cool stuff I've made!</h1>
      <section>
        <div className="title">Pinetree Garden Seeds</div>
        <div className="content">
          An Ecommerce site developed and maitained on the Shopify Plus
          platform.{' '}
        </div>
      </section>
    </ProjectStyles>
  );
}
