/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Random } from "unsplash-js/dist/methods/photos/types";
import Item from "./Item";
import getImages from "./utils/getImages";

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
`;

const App = () => {
  const [data, setData] = useState<Random[]>([]);
  const init = async () => {
    const images = (await getImages()) as Random[];
    setData(images);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div css={container}>
      <div css={wrapper}>
        <header css={headerContainer}>
          <h2 css={title}>Kolor Palette</h2>
        </header>
        <main css={main}>
          {data.map((_, idx, arr) =>
            idx % 2 === 0 ? (
              <section css={itemWrapper}>
                {arr.slice(idx, idx + 2).map((item, _idx) => (
                  <Item key={item.id} data={item} idx={idx} />
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
};

export default App;
