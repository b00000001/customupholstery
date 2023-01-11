import {useEffect, useState, useRef} from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const myRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    if (window.scrollY === 0){
      myRef.current.className = 'transition-all ease-in-out duration-[1000ms] h-1/5 text-white text-5xl flex items-center justify-between w-auto'
    } else {
      console.log('scrolled menu', myRef.current.className);
      myRef.current.className = 'transition-all ease-in-out duration-[1000ms] fixed top-0 h-16 bg-zinc-900 text-white text-3xl flex items-center justify-between w-full'
    }
  });
  const [clientWindowHeight, setClientWindowHeight] = useState('');

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  return (
    <div className="scroll-smooth h-100">
      <section className="mb-40 h-full">
        <div
          className="relative overflow-hidden bg-no-repeat bg-cover"
          style={{
            backgroundPosition: '50%;',
            backgroundImage:
              "url('https://irp-cdn.multiscreensite.com/58c9c8d5/wid-1.jpg');",
            height: '800px;',
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 w-full overflow-hidden bg-fixed"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
          >
            <div ref={myRef} className="h-1/5 text-white text-3xl flex items-center justify-between w-auto">
              <div className="pl-12 font-bold">Logo</div>
              <div className="w-2/5">
                <ul className="flex justify-evenly w-11/12 text-xl font-bold">
                  <li className='transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer'>Home</li>
                  <li className='transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer'>About Us</li>
                  <li className='transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer'>Service</li>
                  <li className='transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer'>Photo Gallery</li>
                  <li className='transition-all ease-in-out duration-[200ms] hover:text-slate-400 cursor-pointer'>Contact</li>
                </ul>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center text-white px-6 md:px-12">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                  Studio 33 <br />
                  <span>Upholstery</span>
                </h1>
                <button
                  type="button"
                  className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  <a href="#get-started">Get Started</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-items-start text-black text-3xl h-40">
          <div className="flex flex-col mt-2 ml-6 border bg-gray-300 px-16">
            <p className="flex items-center justify-center w-auto ml-12 font-bold">
              What we do
            </p>
            <p className="mt-4 font-bold">
              Full service upholstery in B.C. Canada
            </p>
          </div>
        </div>
      </section>
      <section id='get-started' className="border border-gray-400">
        <div>Other upholstery info</div>
      </section>
    </div>
  );
}
