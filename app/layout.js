import AuthProvider from "@/src/providers/AuthProvider";
import "./globals.css";
import { Josefin_Sans } from "next/font/google";

export const metadata = {
  title: {
    default: "Sarte Solution",
    template: "%s - My Blog" 
  },
  description: "Sarte Solution, established by Hamza Shabbir in Pakistan, provides a wide array of digital services to enhance business operations. Specializing in digital marketing, web development, IT solutions, creative services, emerging technologies, and education and training, Sarte Solution offers tailored solutions to meet the unique needs of organizations. From SEO and content marketing to custom website design, cloud services, AI, and corporate training, Sarte Solution empowers businesses to thrive in the digital age.",
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
