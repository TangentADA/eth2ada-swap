import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional
import Collection_dropdown2 from "../../components/dropdown/collection_dropdown2";
import {
  collectionDropdown2_data,
  EthereumDropdown2_data,
} from "../../data/dropdown";
import { FileUploader } from "react-drag-drop-files";
import Proparties_modal from "../../components/modal/proparties_modal";
import { useDispatch } from "react-redux";
import { showPropatiesModal, toastModalShow } from "../../redux/counterSlice";
import Meta from "../../components/Meta";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
const Create = () => {
  const fileTypes = [
    "JPG",
    "PNG",
    "GIF",
    "SVG",
    "MP4",
    "WEBM",
    "MP3",
    "WAV",
    "OGG",
    "GLB",
    "GLTF",
  ];
  const [term, setTerm] = useState('');
  const [description, setDescription] = useState('');
  const [network, setNetwork] = useState('');
  const [file, setFile] = useState([]);
  const[previewUrl, setPreviewUrl] = useState(""); 

  const options = [
    { value: "Cardano", label: "Cardano" },
    { value: "Ethereum", label: "Ethereum" },
    { value: "Both", label: "Both"}, 
  {value: "Other", label: "Other"},
  ];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused ? "2px solid #704DDE" : "2px solid #704DDE",
    borderRadius: "10px",
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
    "&:hover": {
      border: state.isFocused ? "2px solid #704DDE" : "2px solid #704DDE",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#FD8181" : "#FFFFFF",
    color: state.isSelected ? "#FFFFFF" : "#4B5563",
    "&:hover": {
      backgroundColor: state.isSelected ? "#FD8181" : "#E5E5E5",
      color: "#4B5563",
    },
  }),
};

  const [collection, setCollection] = useState('');

  const dispatch = useDispatch();

  const handleChange = (file) => {
    setFile(file);
    setPreviewUrl(URL.createObjectURL(file));

  };
  const handleSelectChange = (option) => {
    setNetwork(option.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Create form data object
    const formData = new FormData();
    formData.append('term', term);
    formData.append('description', description);
    formData.append('network', network);
    // console.log(formData)
    if (file) {
      formData.append('image', file);
    }

    // Send POST request to API
    fetch('https://yallacap-sever-974c52679fc4.herokuapp.com/send-term', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          dispatch(toastModalShow("Congratulations! \nYou have sent your term")) 
          // toast("Congratulations! You have sent your term", {
          //   position: "bottom-center",
          //   autoClose: 2000,
          //   hideProgressBar: true,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          // });       
         } else {
          // alert('Failed to send');
        }
      })
      .catch((error) => {
        console.error(error);
        // alert('Internal server error');
      });
  };




  const popupItemData = [
    {
      id: 1,
      name: "proparties",
      text: "Textual traits that show up as rectangles.",
      icon: "proparties-icon",
    },

  ];
  return (
    <div>
      <Meta title="Eth2Ada" />
      {/* <!-- Create --> */}
      <section className="relative py-24">
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <img
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full w-full"
          />
        </picture>
        <div className="container">
          <h1 className="font-display text-jacarta-700 py-16 text-center text-lg font-medium dark:text-white">
          Contribute to the Eth2Ada dictionary by adding your own term to the dictionary. during V1 the Eth2Ada team will manually check each contribution and update accordingly. during V2 this shall be decentralized with community opinion / upvoting on the accuracy of each term
          </h1>

          <div className="mx-auto max-w-[48.125rem]">
            {/* <!-- File Upload --> */}
    

            {/* <!-- Name --> */}
            <div className="mb-6">
              <label
                htmlFor="item-name"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Dictionary Term<span className="text-red">*</span>
              </label>
              <input
                type="text"
                id="item-name"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                placeholder="Term"
                required
                name="term"
                value={term}
                onChange={(event) => setTerm(event.target.value)}
              />
            </div>

            {/* <!-- External Link --> */}


            {/* <!-- Description --> */}
            <div className="mb-6">
              <label
                htmlFor="item-description"
                className="font-display text-jacarta-700 mb-2 block dark:text-white"
              >
                Description
              </label>
              <p className="dark:text-jacarta-300 text-2xs mb-3">
                The description will be included on the Dictionary page.
              </p>
              <textarea
                id="item-description"
                className="dark:bg-jacarta-700 border-jacarta-100 hover:ring-accent/10 focus:ring-accent dark:border-jacarta-600 dark:placeholder:text-jacarta-300 w-full rounded-lg py-3 px-3 hover:ring-2 dark:text-white"
                rows="4"
                name="description"
                required
                placeholder="Provide a detailed description of your term."
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>
            </div>

            {/* <!-- Collection --> */}
            <div className="relative mb-10">
              <div>
                <label className="font-display text-jacarta-700 mb-2 block dark:text-white">
                  Ethereum or Cardano Term <br/>            
                </label>
                <div className="mb-3 flex items-center space-x-2">
                  <p className="dark:text-jacarta-300 text-2xs">
Select Network Term
                    <Tippy
                      theme="tomato-theme"
                      content={
                        <span>
                        Select Network Term
                        </span>
                      }
                    >
                      <span className="inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          className="dark:fill-jacarta-300 fill-jacarta-500 ml-1 -mb-[3px] h-4 w-4"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM11 7h2v2h-2V7zm0 4h2v6h-2v-6z"></path>
                        </svg>
                      </span>
                    </Tippy>
                  </p>
                </div>
              </div>

              {/* dropdown */}
              {/* <div className="dropdown my-1 cursor-pointer">
                <Collection_dropdown2
                  data={collectionDropdown2_data}
                  collection={true}
                  selected={network}
                  setSelected={setNetwork}
                  // onChange={(event) => setNetwork(event.target.value)}
                />
              </div> */}
              <div>
      <Select
        options={options}
        onChange={handleSelectChange}
        isSearchable={false}
        styles={customStyles}

        placeholder="Select an option"
        classNamePrefix="react-select"
      />
    </div>
     
            </div> 

<div className="mb-6">
              <label className="font-display text-jacarta-700 block dark:text-white">
                Image, Video, Audio, or 3D Model
                <span className="text-red">{" "}(optional)</span>
              </label>

              {file ? (
                                <>

                {/* <p className="dark:text-jacarta-300 text-2xs mb-3">
                  successfully uploaded : {file.name}
                </p> */}

                <img src={previewUrl}  style={{borderRadius: 20, width: "60%"}} className="rounded mb-5"></img>
</>
              ) : (
                <>
                           <p className="dark:text-jacarta-300 text-2xs mb-3">
                  Drag or choose your file to upload
                </p>
     
                </>
     
                
              )}

<div className="dark:bg-jacarta-700 dark:border-jacarta-600 border-jacarta-100 group relative flex max-w-md flex-col items-center justify-center rounded-lg border-2 border-dashed bg-white py-20 px-5 text-center">
                <div className="relative z-10 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    className="fill-jacarta-500 mb-4 inline-block dark:fill-white"
                  >
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path d="M16 13l6.964 4.062-2.973.85 2.125 3.681-1.732 1-2.125-3.68-2.223 2.15L16 13zm-2-7h2v2h5a1 1 0 0 1 1 1v4h-2v-3H10v10h4v2H9a1 1 0 0 1-1-1v-5H6v-2h2V9a1 1 0 0 1 1-1h5V6zM4 14v2H2v-2h2zm0-4v2H2v-2h2zm0-4v2H2V6h2zm0-4v2H2V2h2zm4 0v2H6V2h2zm4 0v2h-2V2h2zm4 0v2h-2V2h2z" />
                  </svg>
                  <p className="dark:text-jacarta-300 mx-auto max-w-xs text-xs">
                    JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max
                    size: 100 MB
                  </p>
                </div>
                <div className="dark:bg-jacarta-600 bg-jacarta-50 absolute inset-4 cursor-pointer rounded opacity-0 group-hover:opacity-100 ">
                  <FileUploader
                handleChange={handleChange}
                name="file"
                    types={fileTypes}
                    classes="file-drag"
                    maxSize={100}
                    minSize={0}
                  />
                </div>
              </div>
            </div>

            {/* <!-- Submit --> */}
            <button
            style={{cursor: 'pointer'}}
              onClick={handleSubmit}

              className="bg-accent-lighter cursor-default rounded-full py-3 px-8 text-center font-semibold text-white transition-all mt-5"
            >
              Submit Term
            </button>
          </div>
        </div>
        <ToastContainer />

      </section>
      {/* <!-- end create --> */}
    </div>
  );
};

export default Create;
