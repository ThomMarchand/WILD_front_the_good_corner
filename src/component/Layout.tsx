import { ReactNode } from "react";
import Head from "next/head";
import { Header } from "./Header";

export const Layout = ({
  children,
  pageTitle,
}: {
  children: ReactNode;
  pageTitle: string;
}) => {
  return (
    <>
      <Head>
        <title>The Good Corner - {pageTitle}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="main-content">{children}</main>
    </>
  );
};
