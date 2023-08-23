import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { useResponsiveLayout } from "../customHooks/useResponsiveLayout";

function Header() {
  const mobileComponent = <HeaderMobile />;
  const desktopComponent = <HeaderDesktop />;
  const currentLayout = useResponsiveLayout(mobileComponent, desktopComponent);
  return <>{currentLayout}</>;
}

export default Header;
