import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full ">
      <nav className="nav">
        <Link href={"/"} className=" flex items-center gap-1">
          <Image src="/assets/logo.png" width={50} height={50} alt="Logo" />
          <p className="nav-logo">
            Price <span className="text-primary">Tracker</span>
          </p>
        </Link>
        <div></div>
      </nav>
    </header>
  );
};

export default Navbar;
