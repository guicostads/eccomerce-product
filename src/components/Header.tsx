import React, { useState, useEffect } from "react";
import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Header() {
  const [currentHeaderLayout, setCurrentHeaderLayout] =
    useState<JSX.Element | null>(null);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const mobileBreakpoint = 768;

      if (screenWidth <= mobileBreakpoint) {
        setCurrentHeaderLayout(<HeaderMobile />);
      } else {
        setCurrentHeaderLayout(<HeaderDesktop />);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{currentHeaderLayout}</>;
}

export default Header;
