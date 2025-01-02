import { createClient } from 'next-sanity';
 import ImageUrlBuilder from '@sanity/image-url';
 import { SanityImageSource } from '@sanity/image-url/lib/types/types';

 export const client = createClient({
   apiVersion: '2024-10-27',
   dataset: 'production',
   projectId: 'hek03y0b',
   useCdn: false,
 });

 const builder = ImageUrlBuilder(client);

 export function urlFor(source: SanityImageSource) {
   return builder.image(source);
 }


// import builder from '@sanity/image-url';
// import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// export function urlFor(source: SanityImageSource): ReturnType<typeof builder.image> | null {
//   if (!source) {
//     console.warn('Invalid image source provided to urlFor:', source);
//     return null;
//   }
//   return builder.image(source);
// }