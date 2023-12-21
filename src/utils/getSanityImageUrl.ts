import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { sanityClient } from '../constants/sanityConfig';

export default (imageSource: SanityImageSource) => {
  const builder = imageUrlBuilder(sanityClient);
  return builder.image(imageSource).url();
};
