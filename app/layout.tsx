import Head from 'next/head';
import Script from 'next/script'

import { Nav } from '@components';
import '@styles/globals.css';

export const metadata = {
  title: 'Ayush Kumar Sinha | Javascript Developer',
  description: 'Porfolio site of Ayush Kumar Sinha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script src="https://kit.fontawesome.com/11ec5388db.js" async ></Script>
        <main className='font-kanit text-primaryBlack'>
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}
