


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
          <main className="flex flex-col min-h-screen py-10 max-w-[64rem] mx-auto px-4 sm:px-6 lg:px-8 md:w-[80%] lg:w-[72%]">
            {children}
          </main>
  );
}
