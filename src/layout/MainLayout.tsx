'use client';

import Footer from "@/components/Footer/Footer";
import TopNav from "@/components/TopNave/TopNave";
import { persistor, store } from "@/redux/store";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

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
  return (
    <>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {
          pathname === '/login' ? <></> : <TopNav />
        }
        {children}
        {
          pathname === '/login' || pathname.startsWith('/dashboard') ? <></> : <Footer />
        }
        {/* </PersistGate> */}
      </Provider>
    </>
  )
}
