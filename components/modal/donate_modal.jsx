import { display } from "@mui/system";
import React, { useState } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Logo from "./../../public/images/logo_white.png";
import { donateModalhide } from "../../redux/counterSlice";


const Donate_modal = () => {
  const donateModal = useSelector((state) => state.counter.donateModal);
  const dispatch = useDispatch();

  const [isCopied, setIsCopied] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    navigator.clipboard.writeText("addr1q8skk43qzh7v9dc0kg8fuw0nh77t67a09s5zpkcyae7wtej8f5qs2jc328wt5a2m0vdyamfwd6umwykps4wwd4729kfqcg46q6")
    setIsCopied(true);
    setTimeout(function() { //Start the timer
      setIsCopied(false);
  }.bind(this), 1000)
  };
  return (
    <div>
      {/* <!-- Wallet Modal --> */}
      <div
        className={donateModal ? "block modal fade show " : "modal fade hidden"}
      >
        <div className="modal-dialog max-w-lg">
          <div className="modal-content">
            <div className="modal-header">
            <div className="modal-body text-center">
            <Image
                  src={Logo}
                  height={60}
                  width={90}
                  alt="ETH2ADA"
                  className="max-h-7 h-auto"
                />
                </div>
              <br/>
              <br/>

             
              {/* <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(profileModalhide())}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="fill-jacarta-700 h-6 w-6 dark:fill-white"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              </button> */}
            </div>
          
            {/* <!-- Body --> */}
            <div className="modal-body p-6 text-center">
           
              <p className="text-center dark:text-white">
              To donate to the building of phase 2 of the Eth2Ada University you may send ADA to this address:
                {/* <a
                  href="https://metamask.io/"
                  className="text-accent"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  &nbsp; MetaMask
                </a> */}
              </p>

              <div className="mx-auto mt-7 max-w-md text-center">
          <form className="relative" onSubmit={handleSubmit} >

            <input
            name="email" 
              type="email"
              disabled={true}
              value={"addr1q8skk43qzh7v9dc0kg8fuw0nh7..."}
              style={{textTransform: "lowercase"}}
              className="dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
            />
            <button type="submit"  className="hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
            {

isCopied ? "Copied!" : <svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
width={24}
height={24}
style={{color: 'white'}}
className="dark:fill-jacarta-100 fill-jacarta-100 ml-auto mb-px h-4 w-4"
>
<path fill="none" d="M0 0h24v24H0z" />
<path d="M7 7V3a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-4v3.993c0 .556-.449 1.007-1.007 1.007H3.007A1.006 1.006 0 0 1 2 20.993l.003-12.986C2.003 7.451 2.452 7 3.01 7H7zm2 0h6.993C16.549 7 17 7.449 17 8.007V15h3V4H9v3zM4.003 9L4 20h11V9H4.003z" />
</svg>
            }
            
           
            </button>
          </form>
        </div>
            </div>
            {/* <!-- end body --> */}

            <div className="modal-footer" >
              <div className="flex items-center justify-center space-x-4">
                <a style={{cursor: "pointer"}}
                  //href="https://metamask.io/"
                  //target="_blank"
                  //rel="noreferrer noopener"
                  onClick={() => dispatch(donateModalhide())}
                  className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                 Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate_modal;
