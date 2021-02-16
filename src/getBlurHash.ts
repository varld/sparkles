import sharp from 'sharp';
import { encode } from 'blurhash';

export let getBlurhash = (sharp: sharp.Sharp) =>
  new Promise((resolve, reject) => {
    sharp
      .raw()
      .ensureAlpha()
      .resize(32, 32, { fit: 'inside' })
      .toBuffer((err, buffer, { width, height }) => {
        if (err) return reject(err);
        resolve(encode(new Uint8ClampedArray(buffer), width, height, 4, 4));
      });
  });
