"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const menus = [
  {
    title: "Home",
    path: "/home",
  },
  {
    title: "Books",
    path: "/books",
  },
  {
    title: "Events",
    path: "/events",
  },
  {
    title: "Latest",
    path: "/latest",
  },
];

export default function HomeNavBar() {
  return (
    <div className="flex justify-between items-center w-full py-8">
      <div className="relative h-[35px] w-[170px] aspect-auto">
        <Image
          src="/images/swap-reads-logo-horizontal.png"
          fill={true}
          objectFit="contain"
          alt="Swap Reads Logo"
        />
      </div>
      <div className="flex gap-4">
        {menus.map((menu, index) => (
          <Link href={menu.path} key={index}>
            {menu.title}
          </Link>
        ))}
      </div>
      <div>
        <Button asChild size="lg" variant="primary">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
