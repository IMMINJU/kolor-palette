/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Item from "./Item";
import assets from "./assets.json";

const container = css`
  display: flex;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  padding: 24px 0;
`;
const wrapper = css`
  flex: 1;
  width: 100%;
`;
const headerContainer = css`
  padding: 24px;
`;
const title = css`
  font-size: 32px;
  margin-bottom: 36px;
  font-family: "Public Sans", sans-serif;
`;
const main = css`
  padding: 24px;
`;
const itemWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    align-items: normal;
    flex-direction: column;
  }
`;

const App = () => (
  <div css={container}>
    <div css={wrapper}>
      <header css={headerContainer}>
        <h2 css={title}>Kolor Palette</h2>
      </header>
      <main css={main}>
        {assets.map((_, idx, arr) =>
          idx % 2 === 0 ? (
            <section css={itemWrapper}>
              {arr.slice(idx, idx + 2).map((item) => (
                <Item key={item.id} data={item} />
              ))}
            </section>
          ) : (
            <></>
          )
        )}
      </main>
    </div>
  </div>
);

export default App;
