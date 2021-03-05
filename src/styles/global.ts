import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
  --background: ${(props) => props.theme.colors.background};
  --light-background: ${(props) => props.theme.colors.lightBackground};
  --text: ${(props) => props.theme.colors.text};
  --primary: ${(props) => props.theme.colors.primary};
}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Inter, Helvetica Neue, Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: 700;
  }

  input, button {
    border: none;
    outline: transparent;
  }

  button {
    cursor: pointer;

    ::focus, ::active {
      border: none;
    }
  }
`;
