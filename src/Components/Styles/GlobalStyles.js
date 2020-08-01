import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {    
    background: ${(props) => (props.background ? props.background : '#3C4451')};
    color: ${(props) => (props.color ? props.color : '#B3E7CA')};
    font-family: 'Poppins';
    font-kerning: normal;
    letter-spacing: normal;
    line-height: 1.7;
    margin:0%;
    padding:10% 10% 0%;
    width:80%;
    word-spacing: normal;
  }
`;

export default GlobalStyles;
