import Image from "next/image";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa";

/**
 * 
 * @param imgSrc 
 * @param title 
 * @param currentPrice 
 * @returns 
 */
export default function ProductCard({ imgSrc, title, currentPrice }:
  { imgSrc: string, title: string, currentPrice: number }): JSX.Element {
  return (
    <div className="w-fit shadow-2xl rounded-sm p-8 group">
      <div className="w-full overflow-hidden">
        <Image
          src={imgSrc}
          alt="product image"
          width={1000}
          height={1000}
          className="duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4">
        <h3 className="text-center text-2xl font-semibold">{title}</h3>
        <p className="text-center text-xl text-red-600 font-extrabold">$ {currentPrice}</p>
        <Button className="w-full bg-primary/20 duration-300 text-primary hover:bg-secondary hover:text-gray-700 space-x-2">
          <FaPlus />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>
  )
}
