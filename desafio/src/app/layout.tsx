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
  title: 'desafio',
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
          <body className=" bg-gray-900 text-white">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="bg-gray-800">
                <Navbar />
              </div>
            </ThemeProvider>
            <div className="bg-gray-900">

              <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/:name" element={<UserInfo />} />
              </Routes>
            </div>
          </body>
        </html>
      </BrowserRouter>
  
  );
}
