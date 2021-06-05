import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';
import MobileNav from './MobileNav';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Poppins' ;
    src: url('/Poppins/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Poppins' ;
    src: url('/Poppins/Poppins-Light.ttf') format('truetype');
    font-weight: 300;
  }
:root {
  --background: linear-gradient(180deg, rgba(203,115,0,1) 0%, rgba(255,119,0,1) 50%, rgba(245,206,122,1) 100%);
  --background: #282828;
  --background-solid: rgb(203,115,0);
  --pop: purple;
  --words: wheat;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
  box-sizing: border-box;
  
}
body {
  font-family: 'Poppins';
  font-weight: 300;
  padding: 0 ;
  margin: 0;
  background: var(--background);
}


a {
  color: inherit;
  text-decoration: none;
}
`;

const InnerStyles = styled.div`
  /* margin: 10rem auto; */
  padding: 0 2rem;
`;

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <MobileNav />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
