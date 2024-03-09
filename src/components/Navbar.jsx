import { headerLogo } from "../assets/images";
// import { hamburger } from "../assets/icons";

import ResponsiveNav from "./ResponsiveNav";
import { navLinks } from "../Constants";

const Navbar = () => {
  return (
    <header className="padding-x py-8 z-10 w-full absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex justify-center gap-16 items-center w-full max-lg:hidden">
          {navLinks.map((links, index) => {
            const { href, label } = links;
            return (
              <li key={index}>
                <a
                  href={href}
                  className="text-lg text-slate-gray leading-normal font-montserrat"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

          <ResponsiveNav/>

        
        {/* <div className="hidden max-lg:block"
        onClick={()=>{setShowNav(!showNav)}}
        >
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div> */}
      </nav>
    </header>
  );
};

export default Navbar;
