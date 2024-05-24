"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 border-[1px] border-blue-500 rounded-full bg-transparent",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem setActive={setActive} active={active} item="Home"/> {/* this is the home icon in navbar */}
        </Link>

        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#">Hobby</HoveredLink>   {/*  Hoverlink is from the this will work like Link tag */ }
            <HoveredLink href="#">Individual</HoveredLink>
            <HoveredLink href="#">Team</HoveredLink>
            <HoveredLink href="#">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
