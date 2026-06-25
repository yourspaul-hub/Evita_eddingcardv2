import type { Metadata } from "next";
import "./globals.css";
import { weddingConfig } from "@/lib/wedding-config";

export const metadata: Metadata = {
  title: `${weddingConfig.couple.groomName} & ${weddingConfig.couple.brideName} | Wedding Invitation`,
  description: `You are cordially invited to the wedding of ${weddingConfig.couple.groomFullName} and ${weddingConfig.couple.brideFullName} on ${weddingConfig.wedding.displayDate}`,
  openGraph: {
    title: `${weddingConfig.couple.groomName} & ${weddingConfig.couple.brideName} | Wedding`,
    description: `Join us on ${weddingConfig.wedding.displayDate} at ${weddingConfig.wedding.venue}`,
    images: [weddingConfig.images.couple],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
