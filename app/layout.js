import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'אינדקס כלי AI בעברית',
  description: 'מובילים בעברית AI חיפוש, סינון והצגת תוצאות מקסימליות לכלים',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'אינדקס כלי AI בעברית',
    description: 'מובילים בעברית AI חיפוש, סינון והצגת תוצאות מקסימליות לכלים',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }) {
  const year = new Date().getFullYear();
  return (
    <html lang="he" dir="rtl">
      <body className={inter.className + ' min-h-screen bg-gray-50 flex flex-col'}>
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">אינדקס כלי AI</h1>
          </div>
        </header>
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <footer className="bg-white border-t">
          <div className="container mx-auto px-4 py-4 text-sm text-gray-500">
            © {year} אינדקס כלי AI
          </div>
        </footer>
      </body>
    </html>
  );
}
