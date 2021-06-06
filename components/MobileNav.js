import { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import Nav from './Nav';

const MobileStyles = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  background: var(--pop);
  color: white;
  font-size: 2rem;
  clip-path: circle(30px at 50% 90%);
  -webkit-clip-path: circle(30px at 50% 90%);
  ${(props) => props.open && `clip-path: circle(100% at 50% 50%);`};
  ${(props) => props.open && `-webkit-clip-path: circle(100% at 50% 50%);`};
  transition: all 0.4s;

  @media (min-width: 801px) {
    display: none;
  }
`;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  function toggleMenu() {
    setOpen(!open);
  }
  return (
    <MobileStyles open={open} role="button" onClick={toggleMenu}>
      <Hamburger open={open} />
      <Nav open={open} />
    </MobileStyles>
  );
}
