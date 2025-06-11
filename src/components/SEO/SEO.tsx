import React from 'react';
import { Helmet } from 'react-helmet';
import SchemaOrg from './SchemaOrg';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  isArticle?: boolean;
  author?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Jackson Porciúncula - Desenvolvedor • UX/UI Designer',
  description = 'Portfolio de Jackson Porciúncula: Desenvolvedor Front-end e UX/UI Designer. Conheça meus projetos e designs.',
  image = '/opengraph.png',
  url = 'https://jacksonporciuncula.com',
  isArticle = false,
  author = 'Jackson Porciúncula',
}) => {
  const siteUrl = 'https://jacksonporciuncula.com';
  const fullUrl = `${siteUrl}${url}`;
  const defaultImage = `${siteUrl}${image}`;

  return (
    <>
      <Helmet>
        {/* Metadados gerais */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="image" content={defaultImage} />
        <link rel="canonical" href={fullUrl} />

        {/* OpenGraph / Facebook */}
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content={isArticle ? 'article' : 'website'} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={defaultImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jbrunops" />
        <meta name="twitter:creator" content="@jbrunops" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={defaultImage} />
      </Helmet>

      <SchemaOrg
        url={fullUrl}
        title={title}
        description={description}
        image={defaultImage}
        author={author}
      />
    </>
  );
};

export default SEO; 