import styled from 'styled-components';

const HamburgerStyles = styled.div`
  position: relative;
  top: 95%;
  margin: 0 auto;
  background: var(--words);
  width: 25px;
  height: 3px;
  border-radius: 10px;
  transform-origin: center;
  transform: ${(props) => (props.open ? 'rotate(225deg)' : 'rotate(0)')};
  transition: all 0.6s;

  &::before,
  &::after {
    content: '';
    top: ${(props) => (props.open ? '0' : '8px')};
    position: absolute;
    background: var(--words);
    width: 100%;
    height: 3px;
    border-radius: 10px;
    transform: ${(props) => (props.open ? 'rotate(90deg)' : 'rotate(0)')};
  }
  &::after {
    top: ${(props) => (props.open ? '0' : '-8px')};
  }
`;

export default function Hamburger({ open }) {
  return <HamburgerStyles open={open} className="hamburger"></HamburgerStyles>;
}
