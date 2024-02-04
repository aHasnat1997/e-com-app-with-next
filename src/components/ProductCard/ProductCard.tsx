import Image from "next/image";
import { Button } from "../ui/button";
import { FaPlus, FaEye, FaRegHeart } from "react-icons/fa";
import Link from "next/link";

/**
 * Product card component
 * @param imgSrc image src 
 * @param title product title
 * @param currentPrice product price
 * @returns {JSX.Element} ProductCard
 */
export default function ProductCard({ id = '0000', imgSrc, title, currentPrice }:
  { id: string, imgSrc: string, title: string, currentPrice: number }): JSX.Element {
  return (
    <div className="w-fit shadow-2xl rounded-sm p-8 group">
      <div className="w-full relative overflow-hidden">
        <Image
          src={imgSrc}
          alt="product image"
          width={1000}
          height={1000}
          className="duration-300 group-hover:scale-105"
        />
        <div className="flex flex-col gap-4 absolute top-0 -right-36 duration-300 group-hover:right-0">
          <Link href={`/product/${id}`}>
            <Button variant={'outline'} className="text-2xl duration-300 hover:bg-secondary"><FaEye /></Button>
          </Link>
          <Button variant={'outline'} className="text-2xl duration-300 hover:bg-secondary"><FaRegHeart /></Button>
        </div>
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
