import AOS from "aos";
import type { AppProps } from "next/app";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import "../styles/globals.css";

export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <title>My Movie App</title>
      </Head>
      <NextNProgress
        color="#4096ff"
        startPosition={0.3}
        height={5}
        showOnShallow={false}
      />
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}
