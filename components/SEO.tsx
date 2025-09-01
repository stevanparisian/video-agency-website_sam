import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

/**
 * Centralized SEO component to manage common meta tags.
 */
export default function SEO({ title, description, image }: SEOProps) {
  return (
    <Head>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}
    </Head>
  );
}
