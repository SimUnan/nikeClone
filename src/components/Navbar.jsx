import React from "react";

import { headerLogo } from "../assets/images/index.js";
import { hamburger } from "../assets/icons/index.js";

import { navLinks } from "../constants/index.js";

const Navbar = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="max-container flex items-center justify-between w-full">
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="logo"
                        width={129}
                        height={29}
                        className="w-[129px] h-[29px]"
                    />
                </a>
                <ul className="flex flex-1 items-center justify-center gap-12 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                        <a
                            href={item.href}
                            className="font-montserrat leading-normal text-lg text-slate-gray"
                        >
                            {item.label}
                        </a>
                        </li>
                    ))}
                </ul>
                <div className="max-lg:hidden flex gap-2 font-medium font-montserrat leading-normal text-black ">
                    <a href="/">Sign in</a>
                    <span>/</span>
                    <a href="/">Explore Now</a>
                </div>
                <div className="hidden max-lg:block">
                    <img
                        src={hamburger}
                        alt="hamburger"
                        width={25}
                        height={25}
                        className="w-[25px] h-[25px]"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
