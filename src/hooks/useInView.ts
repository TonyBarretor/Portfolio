import { useEffect, useState } from "react";

const useInView = (ref: React.RefObject<HTMLElement>, threshold = 0.2) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    const element = ref.current;
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [ref, threshold]);

  return isInView;
};

export default useInView;
