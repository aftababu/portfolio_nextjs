"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, socialLinks } from ".."; // Assuming these are exported from a data file
import { usePathname } from "next/navigation";
import ModeToggleBtn from "./ModeToggle";
import Github from "./icons/github";
import MenuOpen from "./icons/menu-open";
import MenuClose from "./icons/menu-close";

interface NavLinkProps {
  label: string;
  path: string;
  id?: string;
}

interface NavListProps {
  toggle: boolean;
  singlePage?: boolean;
}

const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`absolute ${
        pathname === "/3d" ? "bg-transparent" : "bg-gray-100 dark:bg-slate-900"
      } border-[1px] border-green-950/10 dark:border-green-200/10 z-30 flex justify-between items-baseline overflow-hidden w-screen pl-2 pr-[5vw] sm:pl-8 py-2 sm:py-2 m-0`}
    >
      <Link href="/">
        <Image
          className="max-w-[70px] xs:max-w-[100px] lg:max-w-[100px] "
          src="/webLogo.png"
          alt="logo"
          width={80}
          height={80}
        />
      </Link>

      <MobileView toggle={toggle} setToggle={setToggle} />

      <nav className="hidden sm:flex self-center text-[17px] md:text-[20px] gap-7 font-medium ">
        <NavList toggle={toggle} />
      </nav>
    </header>
  );
};

export default Navbar;

const NavList: React.FC<NavListProps> = ({  singlePage }) => {
  const getNavLinkClasses = (item: NavLinkProps) =>
    `transition-colors hover:text-green-600 text-white sm:text-green-950/80 ${
      item.label === "Single page" ? "hidden" : ""
    }`;
  const pathname = usePathname();
  return (
    <>
      {navLinks.map((item) =>
        singlePage ? (
          <Link
            key={item.label}
            href={item.path}
            className={getNavLinkClasses(item)}
          >
            {item.label}
          </Link>
        ) : (
          <Link
            href={item.path}
            key={item.label}
            className={`${
              item.path === pathname
                ? "text-green-400 "
                : "text-base transition-colors hover:text-green-900 text-white dark:sm:text-slate-300 dark:hover:text-green-600 sm:text-green-900/80"
            }`}
          >
            {item.label}
          </Link>
        )
      )}
      <ModeToggleBtn />
    </>
  );
};

interface MobileViewProps {
  setToggle: (toggle: boolean) => void;
  toggle: boolean;
}

const MobileView: React.FC<MobileViewProps> = ({ setToggle, toggle }) => (
  <div className="flex sm:hidden self-start px-4 py-3 fixed top-0 right-0 z-50">
    {!toggle ? (
      <MenuOpen setToggle={setToggle} />
    ) : (
      <div className="sm:hidden inline-block bg-green-700/95 dark:bg-green-900/90 text-white rounded-lg">
        <MenuClose setToggle={setToggle} />
        <nav className="flex flex-col gap-3 text-center px-4 pb-3">
          <NavList toggle={toggle} />
          <div className="flex gap-1 mt-2">
            <SocialIcons />
          </div>
        </nav>
      </div>
    )}
  </div>
);

const SocialIcons: React.FC = () => {
  return (
    <>
      {socialLinks.map((item) => (
        <a
          href={item.link}
          key={item.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.name === "GitHub" ? (
            <Github className="sm:w-8 h-auto" />
          ) : (
            <Image
              className="sm:w-8 h-auto"
              width={24}
              height={24}
              src={item.iconUrl}
              alt={item.name}
            />
          )}
        </a>
      ))}
    </>
  );
};
