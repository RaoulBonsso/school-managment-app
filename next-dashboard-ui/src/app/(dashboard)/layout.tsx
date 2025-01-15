
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div className="h-screen flex ">

    {/* LEFT */}
    <div className="w-1/6 bg-red-50 md:w-[8%] lg:w-[16%] xl:w-[14%]">l</div>
    {/* RIGHT */}
    <div className="w-5/6 bg-blue-50 md:w-[92%] lg:w-[84%] xl:w-[86%]">r</div>
   </div>
  );
}
