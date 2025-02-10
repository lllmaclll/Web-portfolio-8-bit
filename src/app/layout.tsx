import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext"; // นำเข้า ThemeProvider
import NavBar from "@/app/components/NavBar";
import I18nProvider from "./context/I18nProvider";
import Layout from "./components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <I18nProvider>
          <ThemeProvider>
            {/* <NavBar /> */}
            <main>
              <Layout>
                {children}
              </Layout>
            </main>
          </ThemeProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
