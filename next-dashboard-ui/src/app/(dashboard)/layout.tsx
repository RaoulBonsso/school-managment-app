import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex ">
      {/* LEFT */}
      <div className="w-1/6 bg-red-50 md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32} />
          <span className="hidden lg:block">SchooLama</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-5/6 d:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
