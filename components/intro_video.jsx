import React, { useState } from "react";

const Intro_video = () => {
  const [videoModal, setvideoModal] = useState(false);
  const [url, setUrl] = useState(null);
  return (
    <>
      {/* <!-- Intro Video --> */}
      <div className="relative mx-auto pb-1 max-w-[90rem]">
        <img
          src="/images/nft-game/crypto_icons.png"
          className="pointer-events-none absolute -top-1/4 animate-fly"
          alt=""
        />
        
      </div>
      {/* <!-- end intro video --> */}

      {/* <!-- YouTube Video Modal --> */}
      <div
        className={
          videoModal ? "modal lightbox fade show block" : "modal lightbox fade"
        }
      >
        <div className="modal-dialog modal-dialog-centered modal-xl w-full">
          <div className="modal-content border-0 bg-transparent">
            <div className="modal-body p-0 relative">
              <button
                onClick={() => {
                  setvideoModal(false);
                  setUrl(null);
                }}
                type="button"
                className="btn-close position-absolute top-0 end-0 p-3 z-10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#fff"
                  className="h-6 w-6"
                >
                  <path d="M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z"></path>
                </svg>
              </button>
              <div
                id="lightboxCarousel-d7ewe4ig"
                className="lightbox-carousel carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="position-absolute top-50 start-50 translate-middle text-white">
                      <div className="spinner-border" role="status"></div>
                    </div>
                    <div className="ratio ratio-16x9">
                      <iframe
                        src={url}
                        title="YouTube video player"
                        allow="accelerometer clipboard-write encrypted-media gyroscope picture-in-picture autoplay"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro_video;
