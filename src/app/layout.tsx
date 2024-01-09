import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Theme from "@/components/ThemeProvider";

const poppins = Poppins({
  subsets: ["devanagari"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "adit",
  description: "adit's personal website",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/memoji-2.png",
        href: "/memoji-2.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/memoji-1.png",
        href: "/memoji-1.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Theme>
          <div className={cn("bg-background-2 dark:bg-background")}>
            {children}
          </div>
        </Theme>
      </body>
    </html>
  );
}
