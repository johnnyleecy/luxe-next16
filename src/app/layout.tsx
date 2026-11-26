import type { Metadata, Viewport } from 'next';
import Header from '@/components/header';
import { Footer } from '@/components/ui';
import { site, pageMeta } from '@/lib/site';
import './globals.css';
import './migration.css';
import './editorial.css';

export const metadata:Metadata={...pageMeta('','','/'),metadataBase:new URL(site.url),applicationName:site.name,robots:{index:site.indexable,follow:site.indexable}};
export const viewport:Viewport={themeColor:'#20201e'};

const GTM_ID = 'GTM-KZ6Z523C';
const GTM_SCRIPT = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`;

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="zh-Hant">
      <head>
        <script dangerouslySetInnerHTML={{__html: GTM_SCRIPT}} />
      </head>
      <body>
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <a className="skip-link" href="#main-content">跳至主要內容</a>
        <Header/>
        <main id="main-content">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
