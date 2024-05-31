import Image from "next/image";
import HomeNavBar from "@/components/HomeNavBar";
export default function Home() {
  return (
    <>
      <div className="w-full h-screen">
        <div className="flex justify-between ">
          <HomeNavBar />
        </div>
      </div>
    </>
  );
}
