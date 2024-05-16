import { createGlobalStyle } from "styled-components";
import 'modern-normalize/modern-normalize.css';

const GlobalStyles = createGlobalStyle`
:root {
  // colors
  --white: #F3F3F3;
   --black: #000000;
   --section: #ECD06F;
   --main: #F7EEA3;
   --card: #E59C2F;
   --border: #8B8B8B;

   --text-not-available: rgba(0, 0, 0, 0.45);
   --text-clarification: #006299;
 
  --dark-theme-bg: #fc8905;
  --light-theme-bg: #F7EEA3;
}
body {
  color: var(--black);
  background-color: var(--light-theme-bg);
  font-family: 'Times New Roman', sans-serif; 
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
   
  }

  p,
  h1, 
  h2,  
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
   
  }

  ul, 
  ol, 
  li {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }
  .active{
    font-weight: 600;
  }
  .spinner {
  animation-name: spin;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
  
}
.submit-btn:disabled {
  background: #e7e8e9;
  color: #9fa3a9;
  cursor: not-allowed;
}
`;
export default GlobalStyles;
