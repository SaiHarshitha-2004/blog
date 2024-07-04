import React, { useState } from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import anime from 'animejs/lib/anime.es.js';
import "./LoginStyles.css";
import { MdOutlineMail } from "react-icons/md";
import {InitialState} from "../context/context.jsx";


const Login = () => {

  const navigate = useNavigate() ;
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [anim, setAnim] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const {user , setUser , setIsLoggedIn , setEmail} = InitialState()

  const validateForm = (toggle) => {
    if (!anim && !isSending) {
      toggle
        ? anime({
            targets: ["#rectwrap rect"],
            strokeDashoffset: [anime.setDashoffset, 0],
            opacity: [
              {
                value: 1,
                duration: 50,
              },
            ],
            easing: "easeOutQuad",
            duration: 650,
          })
        : anime({
            targets: ["#rectwrap rect"],
            strokeDashoffset: [0, anime.setDashoffset],
            easing: "easeOutQuad",
            duration: 700,
          });
    }
  };

  const timeline = () => {
    const moo = () => {
      setAnim(false);
    };
    let tl = anime.timeline({
      easing: "easeInOutSine",
      changeComplete: function () {
        moo();
      },
    });
    tl.add({
      targets: ".inp",
      translateX: "100%",
      opacity: [1, 0],
      easing: "easeInOutSine",
      duration: 350,
      delay: (el, i) => 150 * i,
    })
      .add({
        targets: "#submit",
        outlineWidth: "0px",
        duration: 0,
        easing: "easeInOutSine",
      })
      .add({
        targets: ["#rectwrap rect"],
        opacity: 0,
        easing: "easeOutQuad",
        duration: 100,
      })
      .add({
        targets: ".siz",
        translateY: "60px",
        duration: 250,
      })
      .add({
        targets: ".siz",
        translateY: "-600px",
        easing: "easeInQuad",
        duration: 500,
      })
      .add({
        targets: ".siz",
        opacity: [1, 0],
        duration: 200,
      });
  };

  const reverseAnim = () => {
    const moo = () => {
      setAnim(false);
    };
    setAnim(true);
    setIsSending(false);

    let tl = anime.timeline({
      easing: "easeInOutSine",
      changeComplete: function () {
        moo();
      },
    });
    tl.add({
      targets: ".inp",
      translateX: "0%",
      opacity: [0, 1],
      easing: "easeInOutSine",
      duration: 350,
      delay: (el, i) => 150 * i,
    })
      .add({
        targets: ".siz",
        translateY: "0%",
        translateX: "0%",
        duration: 0,
      })
      .add({
        targets: "#submit",
        outlineWidth: "1px",
        duration: 300,
        easing: "easeInOutSine",
      })
      .add({
        targets: ".siz",
        opacity: [0, 1],
        duration: 300,
      })
      .add({
        targets: ["#rectwrap rect"],
        opacity: [0],
        strokeDashoffset: [0],
        duration: 100,
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  };

  const send = async (e) => {
    e.preventDefault();
  
    setAnim(true);
    setIsSending(true);

          try {
              const res = await axios.post("https://mern-blog-api-one.vercel.app/api/login", {
                email: inputs.email,
                password: inputs.password,
              });
              const data = res.data;
              if (res.status == 200) {

                setUser(data.user.name)
                setEmail(data.user.email)
                setIsLoggedIn(true);
                timeline();
                setTimeout(() => {
                  navigate("/"); 
                }, 1500); 
              } else {
                reverseAnim();
              }


             } catch (err) {
              console.error("Error during request", err);
              if (err.response) {
                setErrorMessage(err.response.data.message);
              } else if (err.request) {
                console.error("Error request:", err.request);
              } else {
                console.error("Error message:", err.message);
              }
              reverseAnim();

            }
  };

  return (
    <div className='w-full h-full flex justify-center'>
      <form id="contactform" className='space-y-9 flex flex-col' onSubmit={send}>
        <div className='inp'>
        <div className='text-center text-3xl mt-16 mb-5 text-white' >Welcome back , Login !</div>

          </div>
      <div className='inp'>
      {errorMessage && <p className="text-red-800 border border-red-600 border-r-2 rounded-md p-5 bg-red-200">{errorMessage}</p>} {/* Display error message */}

      </div>
      

      <div className="inp">
        <span className="inline-flex items-center px-3 text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md">
          <MdOutlineMail  className='text-2xl'/>
        </span>
        <input
        className="w-full"
        placeholder="Email"
        name="email"
        onChange={handleChange}
        value={inputs.email}
        type="email"
        required
      />
      </div>

      
      <div className="inp">
        <span className="inline-flex items-center px-3 text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 rounded-s-md">
          <RiLockPasswordLine  className='text-2xl'/>
        </span>
        <input
        className="w-full"
        placeholder="Password"
        name="password"
        onChange={handleChange}
        value={inputs.password}
        type="password"
        required
      />
      </div>


      
      <button
      className='space-x-4 w-full'
        id="submit"
        type="submit"
        onMouseEnter={() => validateForm(true)}
        onMouseLeave={() => validateForm(false)}
      >
        <span className='siz'>Login</span>
        <svg width="100%" height="100%" id="rectwrap">
          
          <defs>
            <linearGradient
              id="linear-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#00fdff" stopOpacity="1" />
              <stop offset="100%" stopColor="#f093fb" stopOpacity="1" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="none"
            strokeWidth="3"
            stroke="url(#linear-gradient)"
            strokeDasharray="5000"
            strokeDashoffset="5000"
          />
        </svg>

        <div className="siz">
          <svg
            id="Capa_1"
            height="30"
            viewBox="0 0 512.056 512.056"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path d="m350.038 120.265c-7.206-36.687-27.738-70.157-57.939-92.992l-36.071-27.273-36.071 27.272c-30.201 22.835-50.733 56.305-57.939 92.992h188.02z" />
            <path d="m394.777 252.144v151.096h77.609v-69.027z" />
            <path d="m337.633 221.387c-11.732 0-21.277 9.545-21.277 21.278v145.279h48.422v-145.279c0-11.732-9.545-21.278-21.277-21.278z" />
            <path d="m195.701 242.665c0-11.732-9.545-21.278-21.277-21.278h-5.867c-11.732 0-21.277 9.545-21.277 21.278v145.279h48.422v-145.279z" />
            <path d="m117.279 252.144-77.609 82.069v69.027h77.609z" />
            <path d="m286.355 417.944v-175.279c0-28.275 23.003-51.278 51.277-51.278h5.867c3.213 0 6.353.311 9.403.879v-42.001h-193.75v42.001c3.051-.568 6.19-.879 9.403-.879h5.867c28.274 0 51.277 23.003 51.277 51.278v175.279h-54.474c-2.706 12.642-2.828 26.509 3.811 38.389l4.293 7.683h25.264c5.605 13.589 18.466 35.112 45.957 45.893l5.477 2.148 5.477-2.148c27.491-10.781 40.352-32.303 45.957-45.893h25.264l4.294-7.683c6.638-11.88 6.516-25.747 3.81-38.389z" />
          </svg>
        </div>
      </button>

      <div className='flex flex-row space-x-4 justify-end'>
        <p className='text-white'>Don't have an account ? </p>
        <Link to="/signup" className='text-green-500'>Sign Up</Link>
      </div>
    </form>
    </div>
  );
};

export default Login;
