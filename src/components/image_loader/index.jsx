import { useEffect, useRef, useState } from "react";

const LazyImage = ({
  placeholderSrc,
  placeholderClassName,
  placeholderStyle,
  src,
  alt,
  className,
  style,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState("");
  const placeholderRef = useRef(null);

  useEffect(() => {
    // Initiating Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      // Set actual image source && unobserve when intersecting
      if (entries[0].isIntersecting) {
        setView(src);
        observer.unobserve(placeholderRef.current);
      }
    });

    // observe for an placeholder image
    if (placeholderRef && placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }
  }, [src]);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <div style={{ color: "white" }}>loading</div>}
      <img
        src={view} // Gets src only when placeholder intersecting
        className={className}
        style={isLoading ? { display: "none" } : style}
        alt={alt}
        onLoad={onLoad}
      />
    </>
  );
};
export default LazyImage;
