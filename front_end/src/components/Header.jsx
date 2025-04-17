
import { Link } from "react-router-dom"; // ✅ Correct

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarLogo,
  NavbarButton,
} from "./ui/Navbar";
import { useState } from "react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
    const navItems = [
      { name: "Home", link: "/" },
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
    ];
  
  return (
    <div>
     <Navbar>
            <NavBody visible={true}>
              <NavbarLogo />
              <NavItems items={navItems} />
              <NavbarButton href="/signup">Sign Up</NavbarButton>
            </NavBody>
    
            <MobileNav visible={true}>
              <MobileNavHeader>
                <NavbarLogo />
                <MobileNavToggle
                  isOpen={mobileOpen}
                  onClick={() => setMobileOpen(!mobileOpen)}
                />
              </MobileNavHeader>
              <MobileNavMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)}>
                {navItems.map((item, i) => (
                  <Link key={i} to={item.link}>
                    {item.name}
                  </Link>
                ))}
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
    </div>
  )
}

export default Header