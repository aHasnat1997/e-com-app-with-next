'use client';

import Footer from "@/components/Footer/Footer";
import TopNav from "@/components/TopNave/TopNave";
import { usePathname } from "next/navigation";

/**
 * Main layout of app
 * @param children render children 
 * @returns MainLayout JXS
 */
export default function MainLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);


  return (
    <>
      {
        pathname === '/login' ? <></> : <TopNav />
      }
      {children}
      {
        pathname === '/login' ? <></> : <Footer />
      }
    </>
  )
}
