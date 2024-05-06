import HeadLine from "../headLine";
import { newseLatterData } from "../../data/newseLatterData";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import axios from "axios";
import { toastModalShow } from "../../redux/counterSlice";

const NewseLatter = ({ bgWhite = true }) => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const dispath = useDispatch();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const handleSubmit = async e => {
      e.preventDefault();
      try {
        const response = await axios.post('https://yallacap-api.herokuapp.com/newsletter', 
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
          );
        if (response.status === 200) {
          dispath(toastModalShow("Congratulations! You Have Subscribed To The Eth2Ada Newsletter Launching Soon.")) 

                } else {
          toast.error('Oops, something went wrong!');
        }
      } catch (error) {
        toast.error('Oops, something went wrong!');
      }
    };
  return (
    <section className="dark:bg-jacarta-800 relative py-24">
      {bgWhite && (
        <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
          <Image
            src="/images/gradient_light.jpg"
            alt="gradient"
            className="h-full"
            layout="fill"
          />
        </picture>
      )}

      <div className="container">
        <HeadLine
          text="Newsletter"
          classes="font-display text-jacarta-700 mb-16 text-center text-3xl dark:text-white"
        />


        <p className="text-jacarta-700 mx-auto mt-20 max-w-2xl text-center text-lg dark:text-white" style={{textTransform: 'none'}}>
        Join our mailing list to stay in the loop with news & new releases
        </p>

        <div className="mx-auto mt-7 max-w-md text-center">
          <form className="relative" onSubmit={handleSubmit}>

            <input
            name="email" value={formData.email} onChange={handleChange}
              type="email"
              placeholder="Email address"
              style={{textTransform: "lowercase"}}
              className="dark:bg-jacarta-700 dark:border-jacarta-600 focus:ring-accent border-jacarta-100 w-full rounded-full border py-3 px-4 dark:text-white dark:placeholder-white"
            />
            <button type="submit" className="hover:bg-accent-dark font-display bg-accent absolute top-2 right-2 rounded-full px-6 py-2 text-sm text-white">
              Subscribe
            </button>
          </form>
        </div>
        <ToastContainer />

      </div>
    </section>
  );
};

export default NewseLatter;
