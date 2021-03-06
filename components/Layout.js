import Head from 'next/head';
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
  --background: #282828;
  --pop: purple;
  --words: whitesmoke;
  --background: #193549;
  --pop: #ff9d00;
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
h1 {
  font-weight: 500;
}

a {
  color: inherit;
  text-decoration: none;
}
p {
  font-size: 1.75rem;
}

`;

const InnerStyles = styled.div`
  /* margin: 10rem auto; */
  /* padding: 0 2rem; */
`;

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Jef Wright</title>
        <meta property="og:image" content="/screenShot.png" key="ogimage" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <GlobalStyles />
      <Header />
      <MobileNav />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
