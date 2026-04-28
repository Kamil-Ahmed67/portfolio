import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Kamil Ahmed | Software Engineer',
  description: 'Portfolio of Kamil Ahmed - Software Engineer specializing in full-stack development, graduated from American International University Bangladesh',
  keywords: ['Kamil Ahmed', 'Software Engineer', 'Full Stack Developer', 'AIUB', 'React', 'Next.js', 'Node.js'],
  authors: [{ name: 'Kamil Ahmed' }],
  openGraph: {
    title: 'Kamil Ahmed | Software Engineer',
    description: 'Building cutting-edge software & web applications with modern technologies',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}