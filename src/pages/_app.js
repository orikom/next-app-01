import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("app.js , pageProps", pageProps);
  return <Component {...pageProps} />;
}
