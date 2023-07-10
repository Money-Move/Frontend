import '../styles/global.css';
import 'aos/dist/aos.css';
import 'react-dropdown/style.css';

import AOS from 'aos';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@/config';

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
};

export default MyApp;
