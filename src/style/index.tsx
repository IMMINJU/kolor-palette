/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const style = css`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    line-height: 1;
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
  }
`;

const GlobalStyle = () => <Global styles={style} />;

export default GlobalStyle;
