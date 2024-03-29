import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/globals.css";

let title = "Interieurdesign met behulp van A.I.";
let description = "Ontwerp het interieur van jouw woning met behulp van A.I.";
let ogimage = "";
let sitename = "interieurdesign.ai";

export const metadata: Metadata = {
  title,
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url: "https://roomgpt-demo.vercel.app",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" text-black">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
