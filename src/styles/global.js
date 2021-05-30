import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle `
* {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    background-color: #000000;
    color: #FFFFFF;
}

a {
    color: #FFFF;
}

a:hover {
    color: #CCC;
    text-decoration: none;
}

.line-footer {
    border: 0.3px solid #FFF;
}

.logo-home {
    max-width: 230px;
    width: 100%;
    height: auto;
}

.text-black {
    background-color: #000000;
    color: #FFFFFF;
}

.fundo-home {
    padding-top: 20px;
    padding-bottom: 20px;
}

#root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;