import Link from 'next/link';
import styled from 'styled-components';

const HeaderStyles = styled.div`
  width: 90%;
  color: var(--words);
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  margin: 0 auto;
  border-bottom: 2px solid var(--pop);

  .logo {
    padding: 0 1rem;
    width: 50%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 3rem;
    transition: all 0.4s;
    @media (max-width: 500px) {
      width: 100%;
      font-weight: 300;
      text-align: left;
    }
  }
  ul {
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 0;
    list-style: none;
    @media (max-width: 800px) {
      display: none;
    }
  }
  li {
    border-bottom: 1px solid transparent;
    padding: 0 3rem;
    transition: all 0.5s;
  }
  li:hover {
    border-bottom: 1px solid var(--words);
    transform: scale(1.1);
  }
`;
export default function Header() {
  return (
    <HeaderStyles>
      <div className="logo">
        <Link href="/">Jef Wright</Link>
      </div>
      <ul>
        <li>
          <Link className="link" href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link className="link" href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link className="link" href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </HeaderStyles>
  );
}
