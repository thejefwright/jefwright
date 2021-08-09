import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: '9vv91r16',
  dataset: 'production',
  useCdn: true,
  watchMode: true,
});
