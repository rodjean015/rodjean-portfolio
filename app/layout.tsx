import "./globals.css";
import AIChatWidget from "@/components/ui/AIChatWidget";

export const metadata = {
  title: "Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container py-10 relative">
        {children}

        <AIChatWidget />
      </body>
    </html>
  );
}