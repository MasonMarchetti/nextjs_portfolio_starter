import 'nextra-theme-blog/style.css';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import '../styles/main.css'; // Assuming you have custom styles here

export default function Nextra({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      {/* Conditionally render the name and image only on the home page */}
      {router.pathname === '/' && (
        <div className="header-container">
          {/* Centered Name */}
          <h1 className="centered-name">Mason T. Marchetti</h1>

          {/* Circular Image */}
          <div className="header-image">
            <Image
              src="/images/photo3.jpg"
              alt="Header Image"
              width={200}
              height={200}  // Ensure width and height are equal for the circular image
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>
      )}

      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />  {/* Render the current page */}
    </>
  );
}
