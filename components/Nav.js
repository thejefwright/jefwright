import styled from 'styled-components';
import Link from 'next/link';

const NavStyles = styled.ul`
  list-style: none;
  padding: 0;
  color: var(--words);
  font-size: 4rem;
  text-align: center;
  li {
    padding: 1rem 0;
    cursor: pointer;
    transform: translateY(300%);
    opacity: 0;
    transition: all 0.6s;
    ${(props) => props.open && `transform: translateY(0%);`};
    ${(props) => props.open && `opacity: 1;`};
  }
`;

export default function Nav({ open }) {
  return (
    <NavStyles open={open} className="navList">
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
    </NavStyles>
  );
}
