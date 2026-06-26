import type { Metadata } from "next";
import "./globals.css";
import { weddingConfig } from "@/lib/wedding-config";

export const metadata: Metadata = {
  title: `${weddingConfig.couple.groomName} & ${weddingConfig.couple.brideName} | Wedding Invitation`,
  description: `You are cordially invited to the wedding of ${weddingConfig.couple.groomFullName} and ${weddingConfig.couple.brideFullName} on ${weddingConfig.wedding.displayDate}`,
  icons: {
    icon: "/monogram-light.png",
    apple: "/monogram-light.png",
  },
  openGraph: {
    title: `${weddingConfig.couple.groomName} & ${weddingConfig.couple.brideName} | Wedding`,
    description: `Join us on ${weddingConfig.wedding.displayDate} at ${weddingConfig.wedding.venue}`,
    url: "https://evitawedsroshan.com",
    siteName: "Evita Weds Roshan",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${weddingConfig.couple.groomName} & ${weddingConfig.couple.brideName} | Wedding`,
    description: `Join us on ${weddingConfig.wedding.displayDate} at ${weddingConfig.wedding.venue}`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
