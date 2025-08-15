import dynamic from 'next/dynamic';
import "../styles/globals.css";
import "../styles/swap.scss";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../store"; // Adjust to ../redux/store if needed
import { useRouter } from "next/router";
import { MetaMaskProvider } from "metamask-react";
import Meta from "../components/Meta";

// Dynamically import ClientWrapper with SSR disabled
const ClientWrapper = dynamic(() => import('../components/ClientWrapper'), {
  ssr: false, // Disable SSR for this component
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;

  return (
    <>
      <Meta title="Eth2Ada Dictionary" />
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <MetaMaskProvider>
            <ClientWrapper>
              {pid === "/login" ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </ClientWrapper>
          </MetaMaskProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
