import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const MENULIST = [
  {
    name: "OVERVIEW",
    link: "#",
  },
  {
    name: "OUR GROUP",
    link: "#",
  },
  {
    name: "OUR DIVISIONS",
    link: "#",
  },
  {
    name: "GALLERY",
    link: "#",
  },
  {
    name: "CONTACT",
    link: "#",
  },
];
const MenuList = ({ className }: { className?: string }) => {
  return (
    <ul className={cn("flex gap-8  text-sm", className)}>
      {MENULIST.map((menu) => (
        <li key={menu.name}>
          <Link href={menu.link}>
            <button className="p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r">
              <span
                className={cn(
                  "block text-black px-4 py-2 font-semibold rounded-full bg-white hover:bg-transparent hover:text-white transition ",
                  {
                    "from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r text-white":
                      menu.name === "CONTACT",
                  }
                )}
              >
                {menu.name}
              </span>
            </button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuList;
