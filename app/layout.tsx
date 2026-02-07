// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "DEW Solutions",
  description: "Websites & AI Automation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}