import styled from 'styled-components';

const AboutStyles = styled.div`
  height: 100vh;
  width: 80%;
  margin: auto;
  color: var(--words);
  h1 {
    font-size: 5rem;
  }
`;

export default function About() {
  return (
    <AboutStyles>
      <h1>About me!</h1>
      <p>
        Hi, I'm Jef Wright, a front-end developer/designer in Portland, Maine. I
        started out as a chef. I went to culinary school and worked at some
        amazing restautants in Atlanta, Philadelphia, NYC, and Portland, most
        recently as executive chef at Sur Lie. I got interested in web
        development about 10 years ago and have been doing it freelance and for
        my seed company but recently decided to pursue it full time. I still
        love food and cooking but I do it on my own schedule now.
      </p>
      <p>
        I love solving problems. I love to figure out how things work. I love to
        take things apart and put them back together. I love learning new
        things. I love to build things. I love finding lost things. I love
        solving puzzles and riddles. I love noticing the details.
      </p>
      <p>
        My wife and I moved to Maine about 10 years ago (she grew up here) and
        we took over her family's seed company, Pinetree Garden Seeds. This is
        where I realized that I loved development. I also worked on our email
        marketing as well as creating copy and designing marketing assets for
        email and social media. I've worked quite a bit on the design and
        marketing side as well as doing photography. I taught myself html from
        reading the code in html emails that I was trying to customize. After
        realizing how interesting I found it I took some online courses to
        actually learn it along with css and javascript. I've since moved into
        the world of react, currently working a lot with Nextjs and Gatsby.
      </p>
    </AboutStyles>
  );
}
