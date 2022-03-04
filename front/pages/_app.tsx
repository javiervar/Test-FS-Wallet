import "../styles/globals.css";
import type { AppProps } from "next/app";
import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import generateStore from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  const store = generateStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
