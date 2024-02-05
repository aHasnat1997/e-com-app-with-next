'use client';

import { BarChart3, Package, ShoppingCart, UsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardNav() {
  const pathname = usePathname()

  type TNavLink = {
    title: string,
    icon: ReactNode,
    path: string
  }
  const navLink: TNavLink[] = [
    {
      title: 'Dashboard',
      icon: <BarChart3 />,
      path: '/dashboard'
    },
    {
      title: 'Add Product',
      icon: <Package />,
      path: '/dashboard/add-product'
    },
    {
      title: 'View Order',
      icon: <ShoppingCart />,
      path: '/dashboard/view-order'
    },
    {
      title: 'View User',
      icon: <UsersRound />,
      path: '/dashboard/view-user'
    }
  ];

  return (
    <nav className="h-[72vh] p-2 shadow-[3px_1px_10px_rgba(0,0,0,0.3)] rounded-xl">
      {
        navLink.map(item => <div
          key={item.title}
          className=""
        >
          <Link href={item.path}>
            <div className={pathname === item.path ? 'w-full px-6 py-4 flex items-center gap-2 font-semibold rounded-lg duration-200 bg-secondary text-white' : 'w-full px-6 py-4 flex items-center gap-2 font-semibold rounded-lg duration-200 hover:bg-gray-200'}>
              {item.icon}
              {item.title}
            </div>
          </Link>
        </div>)
      }
    </nav>
  )
}
