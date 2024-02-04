import { ReactNode } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { TfiReload } from "react-icons/tfi";
import { GoShieldLock } from "react-icons/go";
import { CiTrophy } from "react-icons/ci";

/**
 * Hero Component for Home page
 * @returns {JSX.Element} Hero
 */
export default function Hero(): JSX.Element {
  // hero section service list array
  const heroServices: {
    icon: ReactNode,
    title: string,
    sudTitle: string
  }[] = [
      {
        icon: <FiShoppingCart />,
        title: 'Free Shipping',
        sudTitle: 'When ordering over $100'
      },
      {
        icon: <TfiReload />,
        title: 'Free Return',
        sudTitle: 'Get Return within 30 days'
      },
      {
        icon: <GoShieldLock />,
        title: 'Secure Payment',
        sudTitle: '100% Secure Online Payment'
      },
      {
        icon: <CiTrophy />,
        title: '100% Secure Online Payment',
        sudTitle: 'Original Product Guaranteed'
      }
    ]

  return (
    <section className="container my-8">
      <div className="flex items-center justify-between py-12">
        <div className="w-1/2 space-y-8">
          <h3 className="text-primary text-3xl">FRESH GROCERY</h3>
          <h1 className="text-gray-600 text-5xl leading-normal font-bold">We Provide Fresh and Organic Products To Your Door.</h1>
          <Button variant={'secondary'} className="text-xl p-8 group">
            Shop Now
            <FaAngleRight className="duration-200 group-hover:translate-x-2" />
          </Button>
        </div>
        <div>
          <Image src='/hero-img-1.png' alt="image" width={800} height={700} />
        </div>
      </div>
      <div className="w-full p-8 bg-primary rounded-md text-white flex items-center justify-between">
        {
          heroServices.map(service => <div
            key={service.title}
            className="flex items-center gap-4"
          >
            <div className="text-4xl">{service.icon}</div>
            <div>
              <h4 className="text-xl font-semibold">{service.title}</h4>
              <h5>{service.sudTitle}</h5>
            </div>
          </div>)
        }
      </div>
    </section>
  )
}
