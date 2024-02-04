'use client';

import Footer from "@/components/Footer/Footer";
import TopNav from "@/components/TopNave/TopNave";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);


  return (
    <>
      <TopNav />
      {children}
      <Footer />
    </>
  )
}
