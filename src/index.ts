import sharp from 'sharp';
import { getImageMeta } from './getImageMeta';
import { getBlurhash } from './getBlurHash';

export interface ImageData extends sharp.Metadata {
  blurhash: string;
}

let getImageData = async (input: string | Buffer) => {
  let image = sharp(input);

  let [meta, blurhash] = await Promise.all([getImageMeta(image), getBlurhash(image)]);

  return Object.assign(meta, {
    blurhash
  });
};

export default getImageData;
