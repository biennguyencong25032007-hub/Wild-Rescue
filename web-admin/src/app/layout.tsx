import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Wild Rescue Admin',
  description: 'Ứng dụng quản lý giải cứu động vật hoang dã',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
