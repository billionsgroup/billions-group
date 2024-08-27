import React from "react";
import { MENULIST } from "../Header/MenuList";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/billions-logo.jpg";
import { Separator } from "../ui/separator";

const Footer = () => {
  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden p-5 space-y-5">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 space-y-5">
          <div>
            <Link href="/">
              <Image
                src={Logo}
                width={500}
                height={500}
                alt="Billions Logo"
                priority
                className="w-[100px]"
              />
            </Link>
          </div>
          <p>
            Established in 2020, Billions Group is a diversified conglomerate
            with primary focus on ready-made garments manufacturing, E-commerce
            & Retail. Billions Group is expending dramatically & building a
            remarkable distinction as an industrial giant in this challenging
            part of the world.
          </p>

          <div className="space-y-2">
            <address>
              <span> Address: </span>
              <span className="text-gray-700">
                Plot-1, Road-18, Sector-7, Uttara, Dhaka-1230 Dhaka, 1230
              </span>
            </address>
            <p>
              <span>Phone: </span>
              <span className="text-gray-700">01977952038</span>
            </p>
            <p>
              <span>Mail: </span>
              <span className="text-gray-700">billionsgroup.bd@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="flex-1 space-y-5">
          <div className="hidden md:block mb-16"></div>
          <h5 className="text-xl font-semibold">Quick Links</h5>
          <ul className="flex flex-col gap-5 text-sm">
            {MENULIST.map((menu) => (
              <li
                key={menu.name}
                className="text-[#006336] hover:text-purple-700 hover:underline underline-offset-2 font-semibold transition-all"
              >
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Separator />
      <div className="text-gray-700">
        <p className="text-center ">
          © {new Date().getFullYear()}. Billions Group. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
