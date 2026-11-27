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

const META_PIXEL_ID = '1689381806067764';
const META_PIXEL_SCRIPT = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`;

const WA_CLICK_SCRIPT = `document.addEventListener('click',function(e){var a=e.target.closest('a');if(a&&a.href&&a.href.indexOf('wa.me')>-1){if(window.fbq){fbq('track','Contact');}}});`;

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="zh-Hant">
      <body>
        <script dangerouslySetInnerHTML={{__html: GTM_SCRIPT}} />
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`} height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        <script dangerouslySetInnerHTML={{__html: META_PIXEL_SCRIPT}} />
        <noscript>
          <img height="1" width="1" style={{display:'none'}} src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} alt="" />
        </noscript>
        <script dangerouslySetInnerHTML={{__html: WA_CLICK_SCRIPT}} />
        <a className="skip-link" href="#main-content">跳至主要內容</a>
        <Header/>
        <main id="main-content">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
