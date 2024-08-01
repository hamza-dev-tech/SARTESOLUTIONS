// app/layout.js


import AuthProvider from "../src/providers/AuthProvider";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: "Sarte Solution",
  description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
  keywords: "digital solutions, web development, IT solutions, digital marketing, emerging technologies, Sarte Solution",
  author: "Sarte Solution Team",
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    url: `${process.env.NEXTAUTH_URL}`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sarte Solution Overview',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/og-image.png",
  },
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age." />
        <meta name="keywords" content="digital solutions, web development, IT solutions, digital marketing, emerging technologies, Sarte Solution" />
        <meta name="author" content="Sarte Solution Team" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </head>
      <body className={Josef.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
