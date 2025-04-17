import { useEffect } from 'react';

const SEO = ({ title, description, image, url, type = 'website' }) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    // Remove existing meta tags
    const existingMetaTags = document.querySelectorAll('meta[name="description"], meta[property^="og:"], meta[name^="twitter:"]');
    existingMetaTags.forEach(tag => tag.remove());

    // Add new meta tags
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.name) meta.setAttribute('name', tag.name);
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });

    // Add JSON-LD
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Retouch IT Services',
      url: url,
      logo: image,
      description: description,
    };

    // Remove existing JSON-LD
    const existingJsonLd = document.querySelector('script[type="application/ld+json"]');
    if (existingJsonLd) existingJsonLd.remove();

    // Add new JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      existingMetaTags.forEach(tag => tag.remove());
      if (existingJsonLd) existingJsonLd.remove();
    };
  }, [title, description, image, url, type]);

  return null;
};

export default SEO; 