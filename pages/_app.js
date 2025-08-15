import dynamic from 'next/dynamic';
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../store";
import { useRouter } from "next/router";
import Meta from "../components/Meta";
const ClientWrapper = dynamic(() => import('../components/ClientWrapper'), { ssr: false });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;

  return (
    <>
      <Meta title="Eth2Ada Dictionary" />
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <ClientWrapper>
            {pid === "/login" ? (
              <Component {...pageProps} />
            ) : (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </ClientWrapper>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
