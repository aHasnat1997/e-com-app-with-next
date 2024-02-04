'use client';

import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegUser, FaRegHeart, FaBars } from "react-icons/fa";
import { LuShoppingBasket } from "react-icons/lu";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Top Nav of the clint
 * @returns {JSX.Element} TopNav
 */
export default function TopNav(): JSX.Element {
  const [sticky, setSticky] = useState(false);
  const categories = ['Vegetables', 'Fruits', 'Juice', 'Meat', 'Milk & Drinks', 'Sea Food', 'Fishes'];
  const nevLists = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Shop',
      path: '/'
    },
    {
      title: 'About',
      path: '/'
    },
    {
      title: 'Blog',
      path: '/'
    },
    {
      title: 'Contact Us',
      path: '/'
    }
  ];

  // making sticky nav after scroll 
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 420) {
        setSticky(true);
      }
      else {
        setSticky(false);
      }
    })
  }, [])

  return (
    <nav>
      <div className="bg-muted py-2">
        <div className="container flex justify-between">
          <ul className="flex items-center gap-4">
            <li className="cursor-pointer">Account</li>
            <li className="cursor-pointer">Track Order</li>
            <li className="cursor-pointer">Support</li>
          </ul>
          <ul className="flex items-center gap-6">
            <li className="cursor-pointer flex items-center gap-2"><FaPhoneVolume /> +9037284745</li>
            <li className="cursor-pointer flex items-center gap-2"><MdEmail /> e-shop@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="container py-2 flex justify-between items-center">
        <Link href='/' className="flex items-center">
          <Image src='/logo.png' alt="logo" width={80} height={80} />
          <h2 className="text-4xl font-extrabold text-gray-500"><span className="text-primary">Eco</span>Shop</h2>
        </Link>
        <div className="flex w-2/5">
          <Input className="border-gray-300" placeholder="Search Product..." />
          <Button>Search</Button>
        </div>
        <div className="text-3xl flex items-center gap-6">
          <FaRegHeart className="cursor-pointer" />
          <LuShoppingBasket className="cursor-pointer" />
          <FaRegUser className="cursor-pointer" />
        </div>
      </div>

      <div className={`w-full py-2 bg-primary duration-500 ${sticky ? 'fixed top-0 right-0 left-0 z-40' : '-top-20'}`}>
        <div className="container flex justify-between items-center">
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-xl w-64 py-6">
                  <FaBars className="mr-4" /> All Categories
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64">
                {
                  categories.map(category => <DropdownMenuItem
                    key={category}
                  >
                    <h4 className="w-full py-2 px-4 rounded-sm text-xl duration-200 hover:bg-primary/50">{category}</h4>
                  </DropdownMenuItem>)
                }
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <ul className="flex items-center gap-8">
            {
              nevLists.map(item => <li key={item.title} className="group">
                <Link href={item.path} className="text-white text-xl">
                  {item.title}
                </Link>
                <div className="w-0 h-[.2rem] bg-muted duration-200 group-hover:w-full" />
              </li>)
            }
          </ul>
          <div>
            <Link href='/'>
              <Button variant={'secondary'}>Login</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
