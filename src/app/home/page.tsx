import Image from "next/image";
import HomeNavBar from "@/components/HomeNavBar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="">
          <HomeNavBar />
        </div>
        <section id="hero" className="h-3/4">
          <div className="md:grid  md:grid-cols-2 h-full items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Lorem ipsum dolor sit amet
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore
              </p>
              <div className="flex w-full max-w-sm items-center space-x-2 border-red-500">
                <Input
                  type="text"
                  placeholder="Search Books"
                  className="border-[#F58658]"
                />
                <Button type="submit" size="lg" variant="primary">
                  Search
                </Button>
              </div>
            </div>
            <div className="flex justify-center relative">
              <div className="h-[500px]  aspect-auto">
                <Image
                  src="/images/books-stacked.png"
                  fill={true}
                  objectFit="contain"
                  alt="Swap Reads Logo"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="flex justify-between py-4">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              What&apos;s new
            </h3>
            <Link href="#" className="text-[#f58658]">
              View all
            </Link>
          </div>
          <div>book carousel</div>
        </section>
      </div>
    </>
  );
}
