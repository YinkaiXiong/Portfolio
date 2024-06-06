"use client";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import {useState} from "react";

const navItems = {
  "/": {
    name: "Home",
  },
  "/about": {
    name: "About",
  },
  // "/experience": {
  //   name: "Experience",
  // },
  "/projects": {
    name: "Projects",
  },
};
export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 h-24 w-full flex justify-center dark:text-light text-dark bg-light dark:bg-dark z-50">
      <div className="lg:w-4/5 md:w-3/5 lg:flex xl:flex hidden justify-between">
        <div className="py-16 text-3xl">
          <Link href={"/"}>Yinkai Xiong</Link>
        </div>
        <div className="py-16">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link key={path} href={path} className="py-1 px-2 text-2xl">
                {name}
              </Link>
            );
          })}
          <a href="mailto:tonyxiong995@gmail.com" className="py-1 px-2 text-2xl">Contact</a>
        </div>
      </div>

      {/*Mobile Nav*/}
      <div className="flex w-screen justify-between items-center px-2 lg:hidden xl:hidden">
        <div className="text-2xl">
          <Link href={"/"}>Yinkai Xiong</Link>
        </div>

        <div>
          <button
            className={`w-12 h-12 relative ${navOpen ? "focus:ring focus:ring-dark dark:ring-light" : ""} rounded-lg`}
            onClick={() => setNavOpen(!navOpen)}
          >
            <Image
              src="/icon/mobile-nav.svg"
              alt="Mobile Nav"
              fill
              className="dark:invert"
            />
          </button>
        </div>
      </div>
      {/*Nav menu*/}
      <div className={`${!navOpen ? "hidden" : ""} absolute w-screen h-screen`} onClick={() => setNavOpen(false)}>
        <div
            className={"absolute right-4 top-20 flex flex-col bg-light dark:bg-dark border border-dark dark:border-light rounded-lg"}
        >
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
                <Link key={path} href={path} className="p-2 text-md">
                  {name}
                </Link>
            );
          })}
          <a href="mailto:tonyxiong995@gmail.com" className="p-2 text-md">Contact</a>
        </div>
      </div>
    </div>
  );
}
