import './globals.css'
import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['latin'], weight: '500' })

export const metadata = {
  title: 'עברית AI אינדקס כלי',
  description: 'אינדקס כלים בעברית: סינון והצגת תוצאות מקסימלית לכלים עם כרטיסים מובנים בעברית.',
  icons: { icon: '/favicon.ico' },
  openGraph: {
    title: 'עברית AI אינדקס כלי',
    description: 'אינדקס כלים בעברית: סינון והצגת תוצאות מקסימלית לכלים עם כרטיסים מובנים בעברית.',
    images: ['/og.png'],
  },
}

export default function RootLayout({ children }) {
  const year = new Date().getFullYear()
  return (
    <html lang="he" dir="rtl">
      <body className={heebo.className + ' min-h-screen bg-gray-50 flex flex-col'}>
        <header className="bg-white shadow">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold">אינדקס כלים AI</h1>
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
  )
}
