import Head from "next/head";

const Meta = ({ title, keyword, desc }) => {
  return (
    <div>
      <Head>
        <title>ETH2ADA</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Ethereum to Cardano Dictionary" key="desc" />
        <meta property="og:title" content="The Eth2Ada Dictionary is designed to aid developers making the transition from Ethereum to Cardano by providing an extensive list of terminology that developers might come across." />
        <meta property="og:image" content="https://eth2ada.com/images/logo.png"/>
        <meta name="thumbnail" content="https://eth2ada.com/images/logo.png" />
        <meta name="subtitle" content="The Eth2Ada Dictionary is designed to aid developers making the transition from Ethereum to Cardano by providing an extensive list of terminology that developers might come across." key="desc" />
        <meta name="google-site-verification" content="yq8x39KxjWB5deElObZ_69pDYeMe1KArm8Wx-xKmzG0" />
        <meta
          property="og:description"
          content="Ethereum to Cardano Dictionary"
        />
        {/* <meta name="robots" content="noindex"></meta> */}
        {/* <meta name="description" content={desc} /> */}
        <meta name="keyword" content="Cardano / Ethereum / Cardano Dictionary / Ethereum / Charles Hoskinson / Vitalik Buterin" />
      </Head>
    </div>
  );
};

Meta.defaultProps = {
  title: "ETH2ADA",
  keyword:
    "Cardano / Ethereum / Cardano Dictionary / Ethereum / Charles Hoskinson / Vitalik Buterin",
  desc: "A Place Where You Can Learn Crypto Definitions",
};

export default Meta;
