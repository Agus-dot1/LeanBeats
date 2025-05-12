import { Helmet } from 'react-helmet-async';
import { defaultSEO } from '../utils/seo';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = defaultSEO.description,
  canonical,
  ogImage,
}) => {
  const siteTitle = title 
    ? `${title} | ${defaultSEO.defaultTitle}`
    : defaultSEO.defaultTitle;

  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={defaultSEO.openGraph.type} />
      <meta property="og:locale" content={defaultSEO.openGraph.locale} />
      <meta property="og:site_name" content={defaultSEO.openGraph.site_name} />
      <meta property="og:image" content={ogImage || defaultSEO.openGraph.images[0].url} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={defaultSEO.twitter.cardType} />
      <meta name="twitter:site" content={defaultSEO.twitter.site} />
      <meta name="twitter:creator" content={defaultSEO.twitter.handle} />
      
      {/* Additional Meta Tags */}
      {defaultSEO.additionalMetaTags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
      
      {/* Canonical */}
      <link 
        rel="canonical" 
        href={canonical || defaultSEO.additionalLinkTags.find(tag => tag.rel === 'canonical')?.href} 
      />
      
      {/* Language Alternates */}
      {defaultSEO.additionalLinkTags
        .filter(tag => tag.rel === 'alternate')
        .map((tag, index) => (
          <link key={index} rel={tag.rel} hrefLang={tag.hrefLang} href={tag.href} />
        ))}
    </Helmet>
  );
};