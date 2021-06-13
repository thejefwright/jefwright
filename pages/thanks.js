import styled from 'styled-components';

const ThanksStyles = styled.div`
  color: var(--words);
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
`;

export default function ThanksPage() {
  return (
    <ThanksStyles>
      <h1>Thanks!</h1>
      <h1>I'll get back to you soon!</h1>
    </ThanksStyles>
  );
}
