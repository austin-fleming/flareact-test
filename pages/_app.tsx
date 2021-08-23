import React from "react";
import { Layout } from "@components/sections";
import "../main.css";
import { DarkmodeProvider } from "@hooks/useDarkmode";

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) => (
  <DarkmodeProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </DarkmodeProvider>
);

export default MyApp;
