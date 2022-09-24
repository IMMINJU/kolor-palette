import { createApi } from "unsplash-js";

const YOUR_ACCESS_KEY = process.env.UNSPLASH_API_KEY as string;

const unsplash = createApi({ accessKey: YOUR_ACCESS_KEY });

const getImages = async () => {
  try {
    const { response } = await unsplash.photos.getRandom({
      orientation: "landscape",
      contentFilter: "high",
      count: 6,
    });

    if (!Array.isArray(response)) throw new Error();

    return response;
  } catch (e) {}
};

export default getImages;
