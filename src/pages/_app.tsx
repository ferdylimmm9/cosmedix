import Layout from "@/components/layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export type Page<P = object> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: React.ReactElement) => React.ReactNode;
  layout?: React.ComponentType;
};

type Props = AppProps & {
  Component: Page;
};

export default function App({ Component, pageProps }: Props) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}
