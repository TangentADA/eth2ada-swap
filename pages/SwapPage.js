import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAdaWallet, setNetwork } from '../store/userSlice';
import Swap from '@dexhunterio/swaps';
import '@dexhunterio/swaps/lib/assets/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { REACT_APP_DEXHUNTER_API_URL } from '../utils/constants';

const SwapPage = ({ adaWallet, network, setAdaWallet, setNetwork }) => {
  const [walletStatus, setWalletStatus] = useState('disconnected');

  // Sync with widget state (rely on selectedWallet from Swap component)
  useEffect(() => {
    if (adaWallet) {
      setWalletStatus('connected');
      toast.success(`Wallet connected via widget: ${adaWallet.name || 'Unknown'}`);
    } else {
      setWalletStatus('disconnected');
    }
  }, [adaWallet]);

  return (
    <div style={{ textAlign: 'center', marginTop: '8%' }}>
      <ToastContainer position="bottom-center" />
      <div style={{ marginBottom: '20px' }}>
        {walletStatus === 'connected' && adaWallet && (
          <p>Wallet connected successfully! ({adaWallet.name})</p>
        )}
      </div>
      <Swap
        orderTypes={['SWAP', 'LIMIT']}
        colors={{
          background: '#202434',
          containers: '#303444',
          subText: '#808484',
          mainText: '#FFFFFF',
          buttonText: '#FFFFFF',
          accent: '#F83472',
        }}
        theme="dark"
        selectedWallet={adaWallet} // Widget should set this via its own connection
        width="450"
        partnerCode="tangent26164647231713964347364756d6539736e386b666d6e65733037727a766a34356c3464706d6a7a76756b6d373330706733757079786a3768777078753574676874307a71757561707867756771707a68686733656a39786b6b396b663061727071393267366134da39a3ee5e6b4b0d3255bfef95601890afd80709"
        partnerName="Tangent2"
        baseUrl={REACT_APP_DEXHUNTER_API_URL}
        onSwapSuccess={() => toast.success('Swap completed successfully!')}
        onSwapError={(error) => toast.error(`Swap failed: ${error.message}`)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  adaWallet: state.user.adaWallet,
  network: state.user.network,
});

const mapDispatchToProps = { setAdaWallet, setNetwork };

export default connect(mapStateToProps, mapDispatchToProps)(SwapPage);
