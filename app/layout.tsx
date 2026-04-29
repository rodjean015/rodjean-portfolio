import "./globals.css";
import { AnimatePresence } from "framer-motion";

export const metadata = {
  title: "Rodjean Verzosa",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">
        {/* Content */}
        <div className="relative z-10 container py-10">
          <AnimatePresence mode="sync">
            {children}
          </AnimatePresence>
        </div>
        {/* AI Widget */}
       
      </body>
    </html>
  );
}