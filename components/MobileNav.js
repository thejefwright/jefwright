import { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import Nav from './Nav';

const MobileStyles = styled.div`
  position: fixed;
  top: 0;
  bottom: 2rem;
  height: 100vh;
  width: 100%;
  background: var(--pop);
  color: white;
  font-size: 2rem;
  clip-path: circle(30px at 50% 95%);
  -webkit-clip-path: circle(30px at 50% 95%);
  pointer-events: none;
  box-shadow: -1px 1px 5px wheat;
  z-index: 1;
  ${(props) => props.open && `clip-path: circle(100% at 50% 50%);`};
  ${(props) => props.open && `-webkit-clip-path: circle(100% at 50% 50%);`};
  ${(props) => props.open && `pointer-events: auto;`};
  transition: all 0.4s;

  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
  }

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
    // <ShadowStyles className="shadow">
    <MobileStyles open={open} role="button" onClick={toggleMenu}>
      <Hamburger open={open} />
      <div className="wrapper">
        <Nav open={open} />
      </div>
    </MobileStyles>
    // {/* </ShadowStyles> */}
  );
}
