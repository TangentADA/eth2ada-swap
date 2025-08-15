import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setAdaWallet, setNetwork } from '../store/userSlice';
import Swap from '@dexhunterio/swaps';
import '@dexhunterio/swaps/lib/assets/style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        partnerName={process.env.DEXHUNTER_PARTNER_NAME || 'Tangent2'}
        partnerCode={process.env.DEXHUNTER_PARTNER_CODE || 'your_partner_code'}
        baseUrl={process.env.REACT_APP_DEXHUNTER_API_URL || 'https://api-us.dexhunterv3.app'}
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
