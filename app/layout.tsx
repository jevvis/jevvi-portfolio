import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import ContactModal from '@/components/ContactModal'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const metadata: Metadata = {
  title: 'Jevvi Supratama | Portfolio',
  description: 'Software Developer & IT Professional — Web Development, Software Testing, IT Operations',
  keywords: ['Jevvi Supratama', 'portfolio', 'web developer', 'software tester'],
  openGraph: {
    title: 'Jevvi Supratama | Portfolio',
    description: 'Software Developer & IT Professional',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased`}>
        {children}
        <ContactModal />
      </body>
    </html>
  )
}
