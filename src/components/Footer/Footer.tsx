'use client';

import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

/**
 * Footer component of the clint
 * @returns {JSX.Element} Footer
 */
export default function Footer(): JSX.Element {
  type TLinkList = {
    title: string,
    to: string
  }

  const generalLinks: TLinkList[] = [
    {
      title: 'Track Order',
      to: '/'
    },
    {
      title: 'Delivery & Returns',
      to: '/'
    },
    {
      title: 'Warranty',
      to: '/'
    },
  ];

  const aboutLinks: TLinkList[] = [
    {
      title: "Rave's Story",
      to: '/'
    },
    {
      title: "Work With Us",
      to: '/'
    },
    {
      title: "Corporate News",
      to: '/'
    },
    {
      title: "Investors",
      to: '/'
    },
  ]

  const usefulLinks: TLinkList[] = [
    {
      title: 'Secure Payment',
      to: '/'
    },
    {
      title: 'Privacy Policy',
      to: '/'
    },
    {
      title: 'Terms of Use',
      to: '/'
    },
    {
      title: 'Archived Products',
      to: '/'
    },
  ]


  return (
    <footer>
      <div className="w-full relative">
        <Image
          src='/news-letter-bg.png'
          alt='footer'
          width={1000}
          height={1000}
          className="w-[100%] h-[26rem]"
        />
        <div className="w-full h-full absolute top-0">
          <div className="section-div text-center flex items-center justify-evenly">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl text-white font-bold">Get <span className="text-secondary">20%</span> Off Discount Coupon</h3>
                <p className="text-white">by Subscribe our Newsletter</p>
              </div>
              <div className="flex items-center">
                <Input placeholder="Email Address" className="rounded-none" />
                <Button variant={'secondary'} className="rounded-none">Get the Coupon</Button>
              </div>
            </div>
            <Image
              src='/vegetable_delivery_boy.png'
              alt='vegetable_delivery_boy'
              width={1000}
              height={1000}
              className="w-96"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-900 -mt-32 pt-32">
        <div className="container py-16 flex items-start justify-between">
          <div>
            <Link href='/' className="flex items-center">
              <Image src='/logo.png' alt="logo" width={80} height={80} />
              <h2 className="text-4xl font-extrabold text-white"><span className="text-primary">Eco</span>Shop</h2>
            </Link>
            <ul className="mt-6 ml-8 text-gray-300 space-y-4 text-lg">
              {
                generalLinks.map(item => <li key={item.title} className="w-fit group">
                  <Link href={item.to}>{item.title}</Link>
                  <div className="w-0 h-[.2rem] bg-muted duration-200 group-hover:w-full" />
                </li>)
              }
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl font-semibold">About Us</h3>
            <ul className="mt-6 text-gray-300 space-y-4 text-lg">
              {
                aboutLinks.map(item => <li key={item.title} className="w-fit group">
                  <Link href={item.to}>{item.title}</Link>
                  <div className="w-0 h-[.2rem] bg-muted duration-200 group-hover:w-full" />
                </li>)
              }
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl font-semibold">Useful Links</h3>
            <ul className="mt-6 text-gray-300 space-y-4 text-lg">
              {
                usefulLinks.map(item => <li key={item.title} className="w-fit group">
                  <Link href={item.to}>{item.title}</Link>
                  <div className="w-0 h-[.2rem] bg-muted duration-200 group-hover:w-full" />
                </li>)
              }
            </ul>
          </div>
          <div>
            <h3 className="text-white text-2xl font-semibold">Contact Info</h3>
            <ul className="mt-6 text-gray-300 space-y-4 text-lg">
              <li className="flex items-center gap-4">
                <div className="w-fit p-2 text-4xl border border-muted rounded-full"><CiLocationOn /></div>
                <div>
                  <h5 className="font-semibold text-white">Address:</h5>
                  <p>4517 Washington Ave. Manchester, <br /> Kentucky 39495</p>
                </div>
              </li>
              <li className="flex items-center justify-center gap-4 text-3xl">
                <FaFacebook />
                <FaInstagram />
                <FaYoutube />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full py-4 text-white text-center border-t">
          ©{new Date().getFullYear()} EcoShop All rights reserved
        </div>
      </div>
    </footer>
  )
}
