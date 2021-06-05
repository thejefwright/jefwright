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
    margin-bottom: 1rem;
    width: 100%;
  }
  button {
    display: block;
    width: 100%;
  }
`;

export default function Contact() {
  return (
    <ContactStyles>
      <h1>Contact Me!</h1>
      <form name="contact" data-netlify="true" method="POST">
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
        <button type="submit">Send</button>
      </form>
    </ContactStyles>
  );
}
