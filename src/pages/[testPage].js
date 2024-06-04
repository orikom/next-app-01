import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function myPage({ mySecret }) {
  console.log("myPage mySecret", mySecret);
  return (
    <>
      <h1> hello world!</h1>
      <h1>this is the page with secret : {mySecret}</h1>
    </>
  );
}

export async function getStaticProps({ params }) {
  console.log(params.testPage);

  return {
    props: {
      mySecret: "hello",
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { testPage: "hello" } }],
    fallback: false,
  };
}
