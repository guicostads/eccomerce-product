import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";
import { useResponsiveLayout } from "../customHooks/useResponsiveLayout";

function Header() {
  const currentLayout = useResponsiveLayout(HeaderMobile, HeaderDesktop);
  return <>{currentLayout}</>;
}

export default Header;
