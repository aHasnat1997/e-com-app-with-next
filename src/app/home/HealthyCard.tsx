import Image from "next/image";
import { Button } from "@/components/ui/button";

/**
 * Healthy card component for Home
 * @returns {JSX.Element} HealthyCard
 */
export default function HealthyCard(): JSX.Element {
  return (
    <section className="container my-8 flex items-center gap-4">
      <div className='relative group overflow-hidden'>
        <div className="relative">
          <div className="relative overflow-hidden rounded-sm">
            <Image src='/bg-img-1.jpg' alt="bg-img" width={500} height={500} className="opacity-20" />
            <div className="bg-green-400/40 absolute top-0 bottom-0 right-0 left-0" />
          </div>
          <div />
        </div>
        <div className="absolute top-0 p-6">
          <h5>FRUITS</h5>
          <h3 className="text-2xl font-semibold my-2">Healthy & Goods <br /> Fruits</h3>
          <Button>Shop Now</Button>
          <Image
            src='/all-fruits.png'
            alt="all-fruits"
            width={500}
            height={500}
            className="mt-4 duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      <div className='relative group'>
        <div className="relative overflow-hidden rounded-sm">
          <Image src='/bg-img-2.jpg' alt="bg-img" width={500} height={500} className="opacity-20" />
          <div className="bg-yellow-400/40 absolute top-0 bottom-0 right-0 left-0" />
        </div>
        <div className="absolute top-0 p-6">
          <Image
            src='/vegetable-picture.png'
            alt="all-fruits"
            width={500}
            height={500}
            className="-my-4 duration-300 group-hover:scale-110"
          />
          <h5>VEGETABLE</h5>
          <h3 className="text-2xl font-semibold my-2">Fresh & Goods <br /> Vegetable</h3>
          <Button variant={'secondary'}>Shop Now</Button>
        </div>
      </div>
      <div className='relative group'>
        <div className="relative overflow-hidden rounded-sm">
          <Image src='/bg-img-1.jpg' alt="bg-img" width={500} height={500} className="opacity-20" />
          <div className="bg-violet-400/40 absolute top-0 bottom-0 right-0 left-0" />
        </div>
        <div className="absolute top-0 p-6">
          <h5>FRUITS</h5>
          <h3 className="text-2xl font-semibold my-2">Healthy & Goods <br /> Fruits</h3>
          <Button>Shop Now</Button>
          <Image
            src='/fruit-juice.png'
            alt="all-fruits"
            width={300}
            height={300}
            className="ml-24 -mt-10 duration-300 group-hover:scale-110"
          />
        </div>
      </div>
    </section>
  )
}
