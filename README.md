# Sparkles ✨

Easily extract metadata and a [blurhash](https://github.com/woltapp/blurhash) from images.

This library is really useful if you want to generate metadata for uploaded images. 
The blurhash makes it easy to display a nice loading-preview for your users.

## Features

- 😻 Easy to use
- 🏎 Super fast (powered by [sharp](https://github.com/lovell/sharp) which uses [libvips](https://github.com/libvips/libvips)).
- ✨ Automatically creates a [blurhash](https://github.com/woltapp/blurhash).

## Install

```bash
# yarn
yarn add @varld/sparkles

# npm
npm install --save @varld/sparkles
```

## Usage

```typescript
import sparkles from '@varld/sparkles';

let data = await sparkles('path or buffer');
// {
//   "width": ...,
//   "height": ...,
//   "format": ...,
//   "blurhash": ...,
//   "space": ...,
//   ...
// }
```

## API

### `sparkles(input: string | Buffer): ImageData`

#### `input: string | Buffer`

Either a path-`string` pointing to an image or a buffer with image data.

#### Returns: `ImageData`

An object containing parameters, like `width`, `height`, `blurhash`, `space` and more. It inherits from `sharp.Metadata`;

##### Example:

```json
{
  "format": "jpeg",
  "width": 3648,
  "height": 5472,
  "space": "srgb",
  "channels": 3,
  "depth": "uchar",
  "density": 72,
  "chromaSubsampling": "4:2:0",
  "isProgressive": true,
  "hasProfile": true,
  "hasAlpha": false,
  "icc": {
    "type": "Buffer",
    "data": [
      ...
    ]
  },
  "blurhash": "UrK2ChxWivxvh2IUaJt7n2Rjt6nh$yr=xEWq"
}
```

## License

MIT © [Tobias Herber](https://github.com/herber)

[![Made by Varld](https://potato.varld.co/oss/badge.svg)](https://varld.co)
