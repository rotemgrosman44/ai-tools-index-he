export const metadata = {
  title: "אינדקס כלי AI בעברית",
  description: "חיפוש, סינון ותצוגת כרטיסים לכלי AI מובילים בעברית",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "אינדקס כלי AI בעברית",
    description: "חיפוש, סינון ותצוגת כרטיסים לכלי AI מובילים בעברית",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="he">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
