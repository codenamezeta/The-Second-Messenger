//? I think this is like a Sanity config file that is maybe referenced by default settings in the studio.

import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '2tffklm5',
  dataset: 'production',
  apiVersion: '2021-10-09',
  useCdn: true,
})
