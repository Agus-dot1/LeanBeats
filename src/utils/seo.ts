export const defaultSEO = {
  titleTemplate: '%s | Lea In The Mix - Beats & Packs de Música',
  defaultTitle: 'Lea In The Mix - Beats & Packs de Música | Productor Musical Argentino',
  description: 'Beats y packs de música profesionales por Lea In The Mix. Encuentra beats únicos para reggaeton, trap y aleteo. Productor musical argentino.',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://leainthemix.com/',
    site_name: 'Lea In The Mix',
    images: [
      {
        url: 'https://res.cloudinary.com/do17gdc0b/image/upload/v1746479152/Lean_in_the_mix___imruso003_q4xmja.jpg',
        width: 1200,
        height: 630,
        alt: 'Lea In The Mix - Productor Musical',
      },
    ],
  },
  twitter: {
    handle: '@LEAINTHEMIX',
    site: '@LEAINTHEMIX',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'beats, packs de música, productor musical, reggaeton, trap, aleteo, beats profesionales, Argentina'
    },
    {
      name: 'geo.region',
      content: 'AR'
    },
    {
      name: 'geo.placename',
      content: 'Argentina'
    },
    {
      name: 'language',
      content: 'es'
    }
  ],
  additionalLinkTags: [
    {
      rel: 'alternate',
      hrefLang: 'es-AR',
      href: 'https://leainthemix.com'
    },
    {
      rel: 'canonical',
      href: 'https://leainthemix.com'
    }
  ]
};