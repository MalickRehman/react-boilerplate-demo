import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import NavList from "./navlist";

// NavbarSimple component represents a simple navigation bar
function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);

  // Function to handle window resize event
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Clean up: remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between text-blue-gray-900">
        {/* Brand name */}
        <Typography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Brand Name
        </Typography>
        {/* Navigation list */}
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* Hamburger icon for mobile */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      {/* Collapsible navigation list for mobile */}
      <Collapse open={openNav}>{openNav && <NavList />}</Collapse>
    </Navbar>
  );
}

export default NavbarSimple;
