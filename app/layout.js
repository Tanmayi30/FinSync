import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "FinSync - Finance Tracker",
  description: "manage all expenses",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`} suppressHydrationWarning>
        {/* header */}
        <Header/>
        <main className= "min-h-screen"> {children}</main>
        <Toaster richColors position="bottom-right" />
       
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className = "container mx-auto px-4 text-center text-gray-600">
            <p> Made for managing finances.</p>
          </div>
        </footer>
        </body>
    </html>
    </ClerkProvider>
  );
}
