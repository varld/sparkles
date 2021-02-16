import sharp from 'sharp';

export let getImageMeta = (sharp: sharp.Sharp) => sharp.metadata();
