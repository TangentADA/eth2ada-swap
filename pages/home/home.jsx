import React from 'react';
import {
	NewseLatter,
} from '../../components/component';
import Intro_video from "../../components/intro_video";
import Statistic_promo_2 from "../../components/promo/statistic_promo_2";

import Meta from '../../components/Meta';
import Hero_4 from '../../components/hero/hero_4';
import CoverflowCarousel from '../../components/carousel/coverflowCarousel';
import { useSelector, useDispatch } from "react-redux";
import { infoModalhide } from "../../redux/counterSlice";

const Home_1 = () => {
	const dispatch = useDispatch();
	const infoModal = useSelector((state) => state.counter.infoModal);

	return (
		<>
		        <div>
      {/* <!-- Wallet Modal --> */}
      {/* <div
        className={ infoModal ? "block modal fade show " : "modal fade hidden"}
		>
        <div className="modal-dialog max-w-lg">
          <div className="modal-content">
            <div className="modal-header" style={{ display: "block"}}>
			<h5 className="modal-title" id="addPropertiesLabel" style={{textAlign: 'center'}}>
                PHASE 1
              </h5>

            </div>

			<div className="modal-body p-7 text-center">
        
              <p className="text-center dark:text-white" style={{textTransform: 'none'}}>
			  Please support our F10 Catalyst proposals
to roll out the          
      <a
                  href="https://cardano.ideascale.com/c/idea/100049"
                  className="text-accent"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  &nbsp; Eth2Ada University &nbsp; 
                </a>  
				and bring 
				<a
                  href="https://cardano.ideascale.com/c/idea/100058"
                  className="text-accent"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  &nbsp; Eth2Ada Dictionary On-Chain &nbsp; 
                </a>  


              </p>
            </div>
            <div className="modal-footer" >
              <div className="flex items-center justify-center space-x-4">
                <a style={{cursor: "pointer"}}

                  onClick={() => dispatch(infoModalhide())}
                  className="bg-accent shadow-accent-volume hover:bg-accent-dark rounded-full py-3 px-8 text-center font-semibold text-white transition-all"
                >
                 Close
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
			<Meta title="Eth2Ada Dictionary" />
			<Hero_4 />
			<Intro_video />
			<CoverflowCarousel />
			<Statistic_promo_2 />

			<NewseLatter bgWhite={true} />
		</>
	);
};

export default Home_1;
