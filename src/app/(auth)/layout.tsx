import Image from "next/image";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-muted flex min-h-screen items-center flex-col justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href={"/"}
          className="flex items-center gap-2 self-center font-medium"
        >
          <Image src="/images/logo.svg" alt="logo" height={60} width={60}/>
        </Link>
        {children}
      </div>
    </div>
  );
};

export default Layout;
