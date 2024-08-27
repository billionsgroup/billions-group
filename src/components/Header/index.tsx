import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Logo from "@/assets/billions-logo.jpg";
import MenuList from "./MenuList";
import { Menu } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full max-w-6xl mx-auto p-5 bg-white sticky top-0">
      <div className="flex  justify-between items-center gap-5">
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

        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="hidden">Billions Group</SheetTitle>
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
                <MenuList className="flex-col justify-center items-center pt-10" />
                <SheetDescription className="hidden">
                  Established in 2020, Billions Group is a diversified
                  conglomerate with primary focus on ready-made garments
                  manufacturing, E-commerce & Retail. Billions Group is
                  expending dramatically & building a remarkable distinction as
                  an industrial giant in this challenging part of the world..
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <MenuList className="hidden lg:flex" />
      </div>
    </header>
  );
};

export default Header;
