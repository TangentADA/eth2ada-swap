import { display } from "@mui/system";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { profileModalhide } from "../../redux/counterSlice";

const Profile_modal = () => {
  const profileModal = useSelector((state) => state.counter.profileModal);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <!-- Wallet Modal --> */}
      <div
        className={profileModal ? "block modal fade show " : "modal fade hidden"}
      >
        <div className="modal-dialog max-w-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="walletModalLabel">
              Profile Section V2
              </h5>

            </div>


            <div className="modal-footer" >
              <div className="flex items-center justify-center space-x-4">
                <a style={{cursor: "pointer"}}

                  onClick={() => dispatch(profileModalhide())}
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

export default Profile_modal;
