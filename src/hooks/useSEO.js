import { useEffect } from 'react';

/**
 * Lightweight SEO manager — sets document title and meta tags without
 * pulling in react-helmet (avoids React 19 peer-dependency friction).
 */
export default function useSEO({ title, description, image, url }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (selector, attr, value) => {
      if (!value) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [, attrName, attrValue] = selector.match(/\[(.+)="(.+)"\]/) || [];
        if (attrName && attrValue) el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:image"]', 'content', image);
    setMeta('meta[property="og:url"]', 'content', url);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
  }, [title, description, image, url]);
}
