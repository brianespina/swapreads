"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

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
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div>home</div>
        <div></div>
      </div>
      <div>
        <Button asChild size="lg" variant="primary">
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </div>
  );
}
