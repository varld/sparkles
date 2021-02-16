import { join } from 'path';
import { readFileSync } from 'fs';
import getImageData from '../src';

describe('sparkles', () => {
  it('returns image data for path', async () => {
    let data = await getImageData(join(__dirname, './__fixtures__/image.jpg'));

    expect(typeof data.blurhash).toBe('string');
    expect(data.height).toBe(5472);
    expect(data.width).toBe(3648);
    expect(data.format).toBe('jpeg');
  });

  it('returns image data for buffer', async () => {
    let buffer = readFileSync(join(__dirname, './__fixtures__/image.jpg'));
    let data = await getImageData(buffer);

    expect(typeof data.blurhash).toBe('string');
    expect(data.height).toBe(5472);
    expect(data.width).toBe(3648);
    expect(data.format).toBe('jpeg');
  });
});
