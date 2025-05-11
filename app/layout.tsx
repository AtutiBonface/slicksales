import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slicksales Limited",
  icons: {
    icon: "./favicon.png",
    shortcut: "./favicon.png"
  },
  description: "Slicksales Limited is the leading provider of innovative solutions in the tech industry. Our mission is to deliver high-quality products and services that meet the needs of our clients and help them achieve their goals. With a team of experienced professionals and a commitment to excellence, we strive to be at the forefront of technology and innovation."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon"  href="./favicon.png" />
        <link rel="icon" type="image/png"  href="./favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link href='https://fonts.googleapis.com/css?family=Comfortaa:400,700' rel='stylesheet'/>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Slicksales Limited is the leading provider of innovative solutions in the tech industry. Our mission is to deliver high-quality products and services that meet the needs of our clients and help them achieve their goals. With a team of experienced professionals and a commitment to excellence, we strive to be at the forefront of technology and innovation." /> 
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
