import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kandon Fears | Broadcast Journalism Portfolio",
  description:
    "I am Kandon Fears, a broadcast journalism scholar at Florida A&M University. My portfolio includes collections of published work from The FAMUAN alongside selected hosting and co-producing samples from Word Around Campus and Venom Affairs.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
