/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
const fontStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: min(16px, 1vw);
  font-family: "Roboto", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

type ColorItem = {
  percent: number | null;
  closest_palette_color: string;
  html_code: string;
  r: number;
  g: number;
  b: number;
};

type Props = {
  data: {
    color: string;
    urls: {
      regular: string;
    };
    background_colors: ColorItem[];
    foreground_colors: ColorItem[];
    image_colors: ColorItem[];
  };
};

const hexToRgb = (hex: string) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : [];
};

const getFontColor = (rgb: number[]) => {
  const brightness = Math.round(
    (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000
  );
  return brightness > 125 ? "#1414147a" : "#fafafab7";
};

const Item = ({ data }: Props) => {
  const colorItems = [
    ...data.background_colors,
    ...data.foreground_colors,
    ...data.image_colors,
  ].filter(
    (item, idx, self) =>
      item.percent &&
      30 < item.percent &&
      idx === self.findIndex((t) => t.html_code === item.html_code)
  );

  return (
    <article css={container}>
      <div
        css={[
          fontStyle,
          css`
            background-color: ${data.color};
            color: ${getFontColor(hexToRgb(data.color))};
          `,
        ]}
      >
        {data.color}
      </div>
      <img css={imgStyle} src={data.urls.regular} alt="img" />
      <div css={colorWrapper}>
        {colorItems.map((item) => (
          <div
            css={[
              fontStyle,
              css`
                background-color: ${item.html_code};
                color: ${getFontColor([item.r, item.g, item.b])};
              `,
            ]}
            key={`${item.closest_palette_color}_${item.html_code}`}
          >
            {item.html_code}
          </div>
        ))}
      </div>
    </article>
  );
};

export default Item;
