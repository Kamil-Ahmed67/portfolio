import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Kamil Ahmed | Software Engineer',
  description: 'Portfolio of Kamil Ahmed - Software Engineer specializing in full-stack development, graduated from American International University Bangladesh',
  keywords: ['Kamil Ahmed', 'Software Engineer', 'Full Stack Developer', 'AIUB', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Kamil Ahmed' }],
  openGraph: {
    title: 'Kamil Ahmed | Software Engineer',
    description: 'Building scalable web applications with modern technologies',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}