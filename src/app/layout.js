import "./globals.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const heading = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-heading" });

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${body.variable} ${heading.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

