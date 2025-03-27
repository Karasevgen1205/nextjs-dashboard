import { inter } from "@/app/ui/fonts";
import "@/app/ui/global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Evgeniy Karas",
    default: "Evgeniy Karas",
  },
  description: "The official page of front-end developer - Evgeniy Karas",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body>{children}</body> */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
