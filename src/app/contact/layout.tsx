import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Şevval Sezer ile iletişim ve randevu talebi.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
