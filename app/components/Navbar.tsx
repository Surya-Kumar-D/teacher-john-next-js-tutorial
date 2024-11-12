import React from "react";
import Link from "next/link";

type Links = {
  href: string;
  label: string;
};

const links: Links[] = [
  { href: "/about", label: "about" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },

  {
    href: "/prisma-example",
    label: "prisma",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-auto sm:flex-row">
        <Link href={"/"} className="btn btn-primary">
          Next Js
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link className="capitalize" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
