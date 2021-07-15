import Head from 'next/head';
import styled from 'styled-components';

const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  color: var(--words);
  font-size: 3.5rem;

  .name {
    padding-top: 2rem;
  }
  h1 {
    margin: 0;
    padding: 0;
    line-height: 1;
    font-size: clamp(8rem, 14vw, 14vw);
    /* font-size: 7rem; */
  }
  .last {
  }

  .tag {
    font-size: 4rem;
  }
  .title {
    font-size: 2.25rem;
  }
  .big {
    display: none;
  }
  @media (min-width: 2500px) {
    .big {
      font-size: 6rem;
      display: block;
      justify-self: end;
      align-content: center;
      text-align: center;
      text-decoration: underline;
    }
  }
`;

export default function Home() {
  return (
    <>
      <HomeStyles>
        <div className="name">
          <h1>Jef</h1>
          <h1 className="last">Wright</h1>
        </div>

        <p className="tag">I create amazing online experiences</p>
        <p className="title">Web Developer | Portland, ME</p>
        <p className="big">Wow, that's a big monitor!</p>
      </HomeStyles>
    </>
  );
}
