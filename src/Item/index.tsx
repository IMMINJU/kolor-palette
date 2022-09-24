/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import getColors from "../utils/getColors";

const CC = Array(3).fill("color");

const container = css`
  flex: 1;
  display: flex;
  flex-direction: column;
  aspect-ratio: 4 / 3;
  overflow: hidden;
`;
const imgStyle = css`
  width: 100%;
  max-height: 70%;
  object-fit: cover;
`;
const colorWrapper = css`
  flex: 1;
  display: flex;
`;
const primaryColor = css`
  flex: 1;
`;
const Item = ({ data, idx }: any) => {
  const [_data, setData] = useState<any>();

  const init = () => {
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(getColors(data));
      }, idx * 600);
    }).then((result) => setData(result));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <article css={[container]}>
      <div
        css={[
          primaryColor,
          css`
            background-color: ${data.color};
          `,
        ]}
      />
      <img css={imgStyle} src={data.urls.regular} alt="img" />
      <div css={colorWrapper}>
        {CC.map((item: any, idx: any) => (
          <div
            css={css`
              flex: 1;
              background-color: skyblue;
            `}
            key={idx}
          >
            {idx}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Item;
