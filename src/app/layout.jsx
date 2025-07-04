import localFont from "next/font/local";
import { Poppins } from "next/font/google"
import "./globals.css";
import Header from "@/components/Header";

export const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: "Safir Media",
  description: "Safir Media Website",
  icons: {
    icon: "/favicon.ico",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <main className="poppins">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
