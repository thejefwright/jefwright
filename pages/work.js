import { gql } from '@apollo/client';
import client from '../apollo-client';
import styled from 'styled-components';
import Project from '../components/Project';

const WorkStyles = styled.div`
  height: 100vh;
  width: 100%;
  font-size: 2rem;
  color: var(--words);
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
  gap: 2rem;
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
`;
export default function Work({ allPost, allCategory }) {
  return (
    <WorkStyles>
      <h1>Featured Projects</h1>
      <ProjectGridStyles>
        {allPost.map((project) => (
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
          {allCategory.map((category) => (
            <li key={category._id}>{category.title}</li>
          ))}
        </ListStyles>
      </div>
    </WorkStyles>
  );
}

export async function getStaticProps() {
  const { data: projectData } = await client.query({
    query: gql`
      query PROJECT_QUERY {
        allPost {
          title
          bodyRaw
          _id
          link
          mainImage {
            asset {
              url
            }
          }
        }
      }
    `,
  });
  const { data: categoryData } = await client.query({
    query: gql`
      query CATEGORY_QUERY {
        allCategory {
          title
          _id
        }
      }
    `,
  });

  return {
    props: {
      allPost: projectData.allPost,
      allCategory: categoryData.allCategory,
    },
  };
}
