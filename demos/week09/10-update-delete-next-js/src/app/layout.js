import NavBar from "@/components/Navigation";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs'
import { Federo } from 'next/font/google'

export const federo = Federo({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-federo',
  display: 'swap',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <NavBar />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
