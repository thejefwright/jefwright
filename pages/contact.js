import styled from 'styled-components';

const ContactStyles = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  place-content: start center;
  color: var(--words);
  h1 {
    font-size: 5rem;
  }
  label {
    display: block;
    padding: 1rem 0;
    font-size: 1.6rem;
  }
  input,
  textarea {
    font-family: inherit;
    margin-bottom: 1rem;
    font-size: 1.6rem;
    width: 100%;
    background: white;
  }
  button {
    display: block;
    width: 100%;
    border: 1px solid var(--pop);
    color: var(--pop);
    background: white;
    font-size: 2rem;
    border-radius: 30px;
    padding: 1rem;
    cursor: pointer;
    transition: all 0.3s;
    :hover {
      background: var(--pop);
      color: var(--words);
    }
  }
`;

export default function Contact() {
  return (
    <ContactStyles>
      <h1>Contact Me!</h1>
      <form name="contact" data-netlify="true" method="POST" action="/thanks">
        <input type="hidden" name="form-name" value="contact" />
        <label>Name:</label>
        <input placeholder="Name" type="text" name="name" />

        <label>Email:</label>
        <input placeholder="Email" type="email" name="email" />
        <label>Message:</label>
        <textarea
          placeholder="How Can I Help?"
          name="message"
          rows="6"
        ></textarea>
        <button type="submit">Send It!</button>
      </form>
    </ContactStyles>
  );
}
