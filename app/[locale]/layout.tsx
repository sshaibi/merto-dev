import Header from '@/components/Header'
import '@/styles/global.css'
import type { Metadata } from 'next'
import { poppins, söhne, urbanist } from '@/libs/fonts'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import { ThemeProvider } from './theme-provider'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Mert Enercan',
  description: 'Fullstack Web Developer | NextJS | Mert Enercan',
}

export default function LocaleLayout({
  children,params
}: {
  children: React.ReactNode,
  params:any
}) {

    const locale = useLocale();
 
    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
      notFound();
    }
   
  return (
    <html lang={locale}>
      <body className={`${söhne.variable} ${urbanist.variable} ${poppins.variable} bg-slate-100 dark:bg-black transition-all duration-200`}>
        <ThemeProvider  attribute="class"
            defaultTheme="system"
            enableSystem
           >
        <Header lang={locale}/>
        {children}
        </ThemeProvider>
      </body>
      <Analytics />
    </html>
  )
}
