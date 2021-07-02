import { gql } from '@apollo/client';
import client from '../apollo-client';
import styled from 'styled-components';
import Project from '../components/Project';

const WorkStyles = styled.div`
  height: 100vh;
  width: 100%;
  font-size: 2rem;
  /* display: flex;
  justify-content: flex-start;
  align-items: center; */
  color: var(--words);
`;

export default function Work({ allPost }) {
  return (
    <WorkStyles>
      <h1>Work Page!</h1>
      <Project allPost={allPost} />
    </WorkStyles>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query PROJECT_QUERY {
        allPost {
          title
          bodyRaw
          _id
          link
          categories {
            title
            _id
          }
        }
      }
    `,
  });

  return {
    props: {
      allPost: data.allPost,
    },
  };
}
