// app/layout.js


import Script from "next/script";
import AuthProvider from "../src/providers/AuthProvider";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";




export const metadata = {
  title: "Sarte Solution: Your Digital Transformation Partner",
  description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
  keywords: "digital solutions, web development, IT solutions, digital marketing, emerging technologies, Sarte Solution, Generative AI, Top Tech Companies, Europe, Top Development Platform, Boost Your Business",
  author: "Sarte Solution Team",
  alternates: {
    canonical: `${process.env.NEXTAUTH_URL}`,
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
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Sarte Solution',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/og-image.png",
  },
  robots: 'index, follow',
  schema: {
    "@context": "https://schema.org",
    "@type": "DisgitalSolutions",
    headline: "Sarte Solution",
    description: "Sarte Solution offers cutting-edge digital solutions, including web development, IT infrastructure, digital marketing, and emerging technologies to help your business thrive in the digital age.",
    image: "/og-image.png",
    author: {
      "@type": "Organization",
      name: "Sarte Solution",
    },

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
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5822613719641434"
     crossorigin="anonymous"></Script>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-170T4531W6"></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-170T4531W6');
          `}
        </Script>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
