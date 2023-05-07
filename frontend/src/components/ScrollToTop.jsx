import { useEffect } from 'react';
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, -1);
  }, [pathname]);

  return null
}

export { ScrollToTop }
