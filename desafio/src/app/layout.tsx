"use client";

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from '@/Routes/Users';
import UserInfo from '@/Routes/UserInfo';
import Navbar from '@/components/Navbar';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'desafio',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <BrowserRouter>
      <html lang="ptbr">
        <body className="px-16 bg-gray-900 text-white">
          <div className="bg-gray-800">
            <Navbar />
          </div>
          <div className="bg-gray-900">
            
            <Routes>
              <Route path="/" element={<Users />} />
              <Route path="/:name" element={<UserInfo />} />
            </Routes>
          </div>
        </body>
      </html>
    </BrowserRouter>
    </ClerkProvider>
  );
}
