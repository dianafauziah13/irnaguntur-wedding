import '../styles/globals.css';
import '../styles/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-activity/dist/library.css';
import Snowfall from 'react-snowfall';
import {snowfallConfig} from '../config/data';
import moment from 'moment';
import 'moment/locale/id';

moment.locale('id');
React.useLayoutEffect = React.useEffect;

function MyApp({Component, pageProps}: AppProps) {
  const router = useRouter();
  const {place} = router.query;

  const coupleName = place === 'kdr' ? 'Guntur & Irna' : 'Irna & Guntur';
  const imgUrl = 'https://rikafariz-wedding.vercel.app/img/Cincin-1.JPG';

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>The Wedding - {coupleName}</title>

        {/* Open Graph */}
        <meta
          property="og:url"
          content={'https://rikafariz-wedding.vercel.app'}
          key="ogurl"
        />
        <meta property="og:image" content={imgUrl} key="ogimage" />
        <meta
          property="og:site_name"
          content={'Wedding Invitation'}
          key="ogsitename"
        />
        <meta
          property="og:title"
          content={'This is Our Wedding'}
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={'We invited you to celebrate our wedding!'}
          key="ogdesc"
        />
      </Head>
      <Snowfall
        color={snowfallConfig.color}
        snowflakeCount={snowfallConfig.snowflakeCount}
        speed={snowfallConfig.speed}
        wind={snowfallConfig.wind}
        radius={snowfallConfig.radius}
        style={snowfallConfig.style}
      />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
