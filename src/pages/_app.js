import WrappingComponent from "@/compnents/wrappingComponent";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  console.log("app.js , pageProps", pageProps);
  return (
    <WrappingComponent pagePropsFrom_App={pageProps}>
      <Component {...pageProps} />;
    </WrappingComponent>
  );
}
