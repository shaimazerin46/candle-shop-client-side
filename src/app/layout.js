import { Vollkorn } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ToastContainer } from "react-toastify";

const vollkorn = Vollkorn({
  subsets: ["latin"],
}); 
export const metadata = {
  title: "Candle Shop",
  description: "A handmade candle shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vollkorn.className}>
         <ToastContainer position="top-center" />
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
