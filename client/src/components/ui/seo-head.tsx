import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  canonical?: string;
}

export function SEOHead({ 
  title, 
  description, 
  keywords,
  ogTitle,
  ogDescription,
  canonical 
}: SEOHeadProps) {
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]') || 
      document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', description);
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    
    // Set keywords if provided
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]') || 
        document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      metaKeywords.setAttribute('content', keywords);
      if (!document.querySelector('meta[name="keywords"]')) {
        document.head.appendChild(metaKeywords);
      }
    }
    
    // Set Open Graph tags
    const ogTitleTag = document.querySelector('meta[property="og:title"]') || 
      document.createElement('meta');
    ogTitleTag.setAttribute('property', 'og:title');
    ogTitleTag.setAttribute('content', ogTitle || title);
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitleTag);
    }
    
    const ogDescTag = document.querySelector('meta[property="og:description"]') || 
      document.createElement('meta');
    ogDescTag.setAttribute('property', 'og:description');
    ogDescTag.setAttribute('content', ogDescription || description);
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescTag);
    }
    
    // Set canonical URL if provided
    if (canonical) {
      const canonicalLink = document.querySelector('link[rel="canonical"]') || 
        document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', canonical);
      if (!document.querySelector('link[rel="canonical"]')) {
        document.head.appendChild(canonicalLink);
      }
    }
  }, [title, description, keywords, ogTitle, ogDescription, canonical]);
  
  return null;
}
