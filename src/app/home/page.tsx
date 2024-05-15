import Image from "next/image";
import BookListing from "@/components/ui/book-listing";
export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-red-400">
        <div className="flex justify-between p-4 bg-teal-400">
          <div>logo</div>
          <div> nav </div>
          <div> login</div>
        </div>
        <div className="flex justify-center items-center bg-violet-400">
          <Image
            width={600}
            height={400}
            src="https://placehold.co/600x400"
            alt="placeholder"
          />
        </div>
        <div>
          <BookListing />
        </div>
      </div>
    </>
  );
}
