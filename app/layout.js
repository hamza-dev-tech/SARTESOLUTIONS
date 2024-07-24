import AuthProvider from "@/src/providers/AuthProvider";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";



export const metadata = {
  title: "SARTE SOLUTIONS",
  description: "Created By Hamza, founder of SARTE SOLUTIONS.",
};

const Josef = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={Josef.className}>
     <AuthProvider >
          
             
          {children}
          </AuthProvider>
      
        </body>
    </html>
  );
}
