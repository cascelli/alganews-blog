import Head from "next/head";

export default function Header(props: any) {
  return (
    <>
      {/* <Head>
        <title>batata</title>
      </Head> */}
      <h1>oi eu sou um header - {props.name}</h1>
    </>
  );
}
