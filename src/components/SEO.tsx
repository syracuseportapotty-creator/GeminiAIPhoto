import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/data/site';

type SEOProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  jsonLd?: object | object[];
};

export default function SEO({ title, description, path, keywords, image, jsonLd }: SEOProps) {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || `${siteConfig.url}/og-image.jpg`;
  const jsonLdArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      {keywords && keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {siteConfig.twitter && <meta name="twitter:site" content={siteConfig.twitter} />}

      {jsonLdArray.map((data, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
