import { ClientConfig, createClient } from '@sanity/client';

const sanityConfig: ClientConfig = {
  projectId: 'cwalnt37',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-12-19' // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
};

export const sanityClient = createClient(sanityConfig);
