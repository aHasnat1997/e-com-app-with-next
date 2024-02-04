import { Button } from "@/components/ui/button";
import Image from "next/image";

/**
 * Banner component for the home
 * @returns {JSX.Element} Banner
 */
export default function Banner(): JSX.Element {
  return (
    <section className="relative my-8">
      <Image
        src='/banner-1.jpg'
        alt='banner'
        width={1000}
        height={1000}
        className="w-full h-96"
      />
      <div className="w-full h-full text-center absolute top-0 flex items-center justify-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-semibold">Get the best deal for Grocery</h1>
          <p>You get into the 2k+ best Products in Flash offer with as into the find to <br /> make shaped sofa for sale.</p>
          <Button>Shop Now</Button>
        </div>
      </div>
    </section>
  )
}
