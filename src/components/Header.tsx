"use client";
import { usePathname } from "next/navigation";
import { DarkModeToggler } from "./DarkModeToggler";
import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const router = usePathname();
  console.log(router);
  return (
    <header className="flex items-center justify-between w-full bg-white border-b-2  dark:bg-black  h-20 px-4">
      <div className="h-full flex items-center  ">Logo</div>
      <div className="md:flex items-center space-x-2 hidden">
        <Link className={router === "/" ? "text-yellow-500" : ""} href="/">
          <p>Home</p>
        </Link>
        <Link
          className={router === "/phone" ? "text-yellow-500" : ""}
          href="/phone"
        >
          <p>Phones</p>
        </Link>
        <Link
          className={router === "/case" ? "text-yellow-500" : ""}
          href="/case"
        >
          <p>Phone Cases</p>
        </Link>
        <Link
          className={router === "/watch" ? "text-yellow-500" : ""}
          href="/watch"
        >
          <p>Watches</p>
        </Link>
        <Link
          className={router === "/accessories" ? "text-yellow-500" : ""}
          href="/accessories"
        >
          <p>Accessories</p>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Heart color="red" />
          <span className="absolute -top-[14px] font-bold right-0 dark:text-yellow-300 text-yellow-700 ">
            3
          </span>
        </div>
        <div className="relative">
          <ShoppingCart className="text-cyan-400" />
          <span className="absolute -top-3 font-bold right-0 dark:text-yellow-300 text-yellow-700">
            3
          </span>
        </div>
        <p>profile</p>
        <DarkModeToggler />
      </div>
    </header>
  );
};

export default Header;
