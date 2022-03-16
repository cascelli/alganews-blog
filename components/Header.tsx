//import Head from "next/head";
import styled from "styled-components";

export default function Header(props: any) {
  return (
    <>
      {/* <Head>
        <title>batata</title>
      </Head> */}
      <Title>oi eu sou um header - {props.name}</Title>
    </>
  );
}

const Title = styled.h1`
  color: blue;
`;
