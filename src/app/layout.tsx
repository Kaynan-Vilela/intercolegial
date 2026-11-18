import type { Metadata } from "next";
import {Barlow_Condensed} from "next/font/google";
import "./globals.css";
import "./layout.css";

const barlowCondBlack = Barlow_Condensed({
  weight: "700"
});


export const metadata: Metadata = {
  title: "Intercolegial RMC",
  description: "Acompanhe o campenato de Campinas e Região",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={barlowCondBlack.className}>{children}</body>
    </html>
  );
}
