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
        <main className='font-kanit text-primaryBlack'>
          <Nav/>
          {children}
        </main>
      </body>
    </html>
  )
}
