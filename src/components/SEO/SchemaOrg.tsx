import React from 'react';
import { Helmet } from 'react-helmet';

interface SchemaOrgProps {
  url: string;
  title: string;
  description: string;
  image: string;
  author: string;
  datePublished?: string;
}

const SchemaOrg: React.FC<SchemaOrgProps> = ({
  url,
  title,
  description,
  image,
  author,
  datePublished = new Date().toISOString(),
}) => {
  const baseSchema = {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url,
    name: title,
    description,
    author: {
      '@type': 'Person',
      name: author,
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    },
  };

  const personSchema = {
    '@context': 'http://schema.org',
    '@type': 'Person',
    name: 'Jackson Porciúncula',
    jobTitle: 'Desenvolvedor Front-end & UX/UI Designer',
    url: 'https://jacksonporciuncula.com',
    sameAs: [
      'https://github.com/jbrunops',
      'https://linkedin.com/in/jbrunops',
      'https://twitter.com/jbrunops',
      'https://instagram.com/jbrunops',
      'https://facebook.com/jacksonporciuncula',
    ],
    description: 'Desenvolvedor Front-end especializado em React, TypeScript e interfaces modernas, e UX/UI Designer.',
    image,
  };

  const portfolioSchema = {
    '@context': 'http://schema.org',
    '@type': 'ProfilePage',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: datePublished,
    image: {
      '@type': 'ImageObject',
      url: image,
      width: 1200,
      height: 630,
    },
    mainEntity: {
      '@type': 'Person',
      name: 'Jackson Porciúncula',
      url: 'https://jacksonporciuncula.com',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(baseSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(portfolioSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaOrg; 