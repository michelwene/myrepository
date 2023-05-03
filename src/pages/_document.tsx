/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt_BR" className="scroll-smooth">
      <Head>
        <title>Michel Wene</title>
        <meta name="description" content="Portifólio pessoal." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="scrollbar-thumb-black scrollbar-track-gray-100 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full hover:scrollbar-thumb-gray-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
