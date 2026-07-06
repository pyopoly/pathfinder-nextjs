import { useEffect, useState } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState([1000, 1000]);

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions([window.innerHeight, window.innerWidth]);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
