import axios from "axios";
import { Random } from "unsplash-js/dist/methods/photos/types";

const getURL = (imageURL: string) =>
  "https://api.imagga.com/v2/colors?image_url=" + encodeURIComponent(imageURL);

const apiKey = process.env.IMAGGA_API_KEY;
const apiSecret = process.env.IMAGGA_ACCESS_SECRET;

const getColors = async (image: Random) => {
  const { data } = await axios.get(getURL(image.urls.regular), {
    params: { username: apiKey, password: apiSecret },
    headers: {
      Authorization:
        "Basic YWNjXzAzMDgxNTViZDQxZTc1YzozNTc4NjY3NDYzMzE5Njg1YzFlY2I2MTJkNzMzN2QwNg==",
    },
  });
  return { ...image, ...data.result.colors };
};

export default getColors;
