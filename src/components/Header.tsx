import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

function Header() {
  return (
    <>
      <div className="max-md:block md:hidden">
        <HeaderMobile />
      </div>
      <div className="max-md:hidden md:block">
        <HeaderDesktop />
      </div>
    </>
  );
}

export default Header;
