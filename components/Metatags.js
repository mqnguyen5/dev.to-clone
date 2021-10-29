import Head from "next/head";

export default function Metatags({
  title = "NXT Blog",
  description = "A DEV.to clone created using Next.js + Firebase",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Head>
  );
}
