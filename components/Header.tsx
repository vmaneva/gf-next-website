import Link from "next/link";
import React from "react";
import { NavLink, NavLinks } from "./NavLinks";

const Header = () => (
  <div className="header-navigation">
    <nav role="navigation" aria-label="GemFair">
      <div className="nav-wrapper">
        <ul>
          <li className="nav-logo">
            <Link href="/">
              <img
                className="logo"
                alt="GemFair Logo"
                src="./assets/images/header_logo.jpg"
              />
            </Link>
          </li>
        </ul>
        <ul className="nav-links--row links">
          <li>
            <NavLink href="/" name="Home" />
          </li>
          <li>
            <NavLinks
              title="Discover"
              links={[
                { href: "/news", name: "GemFair News" },
                { href: "gemfair-way", name: "The GemFair Way" },
              ]}
            />
          </li>
          <li>
            <NavLinks
              title="People"
              links={[
                { href: "/meet-the-team", name: "Meet the team" },
                { href: "opportunities", name: "Opportunities" },
              ]}
            />
          </li>
          <li>
            <NavLinks
              title="GemFair Community"
              links={[
                { href: "/asm-sector", name: "ASM Sector" },
                { href: "/meet-miners", name: "Meet the miners" },
                { href: "/blog", name: "GemFair Blog" },
              ]}
            />
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Header;
