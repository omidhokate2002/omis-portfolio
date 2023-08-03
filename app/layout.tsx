import "./globals.css";
import React, { ReactNode } from "react";
import { Syne } from "next/font/google";
import type { Metadata } from "next";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Omi's Portfolio",
    description:
    "Hobby Designer and Software Engineer, currently at Neumann Kaffee Gruppe. Focused on immersive experiences, studying in Hamburg, Germany.",
    openGraph: {
        title: "Omi's Portfolio",
        description:
      "Hobby Designer and Software Engineer, currently at Neumann Kaffee Gruppe. Focused on immersive experiences, studying in Hamburg, Germany.",
        url: "",
        images: [
            {
                url: "./public/metadata.jpg",
                width: 1200,
                height: 630,
                alt: "Om Dhokate - Developer",
            },
        ],
        locale: "India",
        type: "website",
    },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
