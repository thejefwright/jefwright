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
          <p>
            A multi-million dollar DTC ecommerce company. The site is developed
            and maitained on the Shopify Plus platform. Built on a barebones
            theme to allow easy customization for the many unique needs of the
            company. Lots of custom liquid and javascript.
          </p>
        </div>
      </section>
      <section>
        <div className="title">Black Heart Private Dining</div>
        <div className="content">
          <p>
            Did you know I'm also a chef? This is the site for my private dining
            company. This is good old vanilla html, css, and js.
          </p>
        </div>
      </section>
      <section>
        <div className="title">Thomas Hill Garden Design</div>
        <div className="content">
          <p>
            A site built for a local garden designer/landscaper. He previously
            had no online presence so the goal here was create a simple site
            where potential customers could view past work and to create one
            point of contact for him. Built with Gatsby, Styled Components,
          </p>
        </div>
      </section>
      <section>
        <div className="title">This Website</div>
        <div className="content">
          <p>
            That's right, I even built my own portfolio website. This is built
            on Nextjs with sanity.io for the CMS.
          </p>
        </div>
      </section>
    </ProjectStyles>
  );
}
