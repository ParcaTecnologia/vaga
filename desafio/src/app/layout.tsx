"use client";

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from '@/Routes/Users';
import UserInfo from '@/Routes/UserInfo';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Desafio',
  description: 'Desafio Github',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <BrowserRouter>
        <html lang="ptbr">
          <body className="text-white">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="">
                <Navbar />
              </div>
            <div className="">

              <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/:name" element={<UserInfo />} />
              </Routes>
            </div>
            </ThemeProvider>
          </body>
        </html>
      </BrowserRouter>
  
  );
}
