import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }

    body {
      background: rgb(244,245,110);
      background: linear-gradient(325deg, rgba(244,245,110,1) 28%, rgba(114,232,225,1) 100%);
      background-repeat: no-repeat;
      min-height: 100vh;
    }
`;
