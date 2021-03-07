import { useEffect, useState } from 'react';

const LazyImage = props => {
  const { src, alt, ...rest } = props;
  const [source, setSource] = useState(null);

  useEffect(() => {
    const img = new Image();
    setSource(null);
    if (src) {
      const handleLoad = () => setSource(src);
      img.addEventListener('load', handleLoad);
      img.src = src;
      return () => {
        img.removeEventListener('load', handleLoad);
      };
    }
  }, [src]);
  if (source) {
    return <img src={source} alt={alt || ''} {...rest} />;
  }
  return null;
};

export default LazyImage;
