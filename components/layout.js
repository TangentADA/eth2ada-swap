import Footer from "./footer";
import Profile_modal from "./modal/profile_modal";
import Donate_modal from "./modal/donate_modal";
import Toast_modal from "./modal/toast_modal";

import { useRouter } from "next/router";
import Header01 from "./header/Header01";


export default function Layout({ children }) {
  const route = useRouter();
  // header start
  let header = <Header01/>
  // header end

  return (
    <>
      {header}
      <Profile_modal />
      <Donate_modal />
      <Toast_modal />
      <main>{children}</main>
      <Footer />
    </>
  );
}
