import { useEffect } from 'react'; // Remove useRef import
import "../styles/globals.css";
import "../styles/swap.scss";
import { ThemeProvider } from "next-themes";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import { store } from "../store"; // Adjust to ../redux/store if needed
import { useRouter } from "next/router";
import { MetaMaskProvider } from "metamask-react";
import Meta from "../components/Meta";
import UserContext from "../components/UserContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pid = router.asPath;
  // Move scrollRef to a client-side component or remove if not critical
  const scrollRef = { scrollPos: 0 }; // Static object instead of useRef

  // If scrollRef is needed client-side, use a useEffect to initialize
  useEffect(() => {
    // Client-side logic for scrollRef if needed
    scrollRef.scrollPos = window.scrollY || 0;
  }, []);

  return (
    <>
      <Meta title="Eth2Ada Dictionary" />
      <Provider store={store}>
        <ThemeProvider enableSystem={true} attribute="class">
          <MetaMaskProvider>
            <UserContext.Provider value={{ scrollRef }}>
              {pid === "/login" ? (
                <Component {...pageProps} />
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </UserContext.Provider>
          </MetaMaskProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
