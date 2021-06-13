import styled from 'styled-components';

const AboutStyles = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-content: center;
  color: var(--words);
`;

export default function About() {
  return (
    <AboutStyles>
      <h1>This is all about me!</h1>
    </AboutStyles>
  );
}
