import { AppProps } from "next/app";
import BaseLayout from "../components/BaseLayout";
import "../styles/main.scss";

const App = ({ Component, pageProps }: AppProps) => (
  <BaseLayout>
    <Component {...pageProps} />
  </BaseLayout>
);

export default App;
