import { useState, useEffect } from 'react';

type ComponentType = React.ReactNode;

export function useResponsiveLayout(
  mobileComponent: ComponentType,
  desktopComponent: ComponentType,
  mobileBreakpoint = 768
): ComponentType {
  const [currentLayout, setCurrentLayout] = useState<ComponentType | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth <= mobileBreakpoint) {
        setCurrentLayout(mobileComponent);
      } else {
        setCurrentLayout(desktopComponent);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileComponent, desktopComponent, mobileBreakpoint]);

  return currentLayout;
}
