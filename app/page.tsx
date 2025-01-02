"use client";
import Image from "next/image";
import React, { useState } from "react";

const ComponentName = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="shrink-0">
              <a href="#" className="flex" title="">
                <Image
                  className="w-auto h-9"
                  src="/logoTrans.png"
                  alt="Logo"
                  width={250}
                  height={100}
                />
                <p className="text-2xl font-bold px-4 py-0"> Maytri</p>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </span>
                ) : (
                  <span aria-hidden="true">
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                )}
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="hidden ml-10 mr-auto space-x-10 lg:ml-20 lg:space-x-12 md:flex md:items-center md:justify-start">
              <a
                href="#"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                About
              </a>
              <a
                href="#"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Features
              </a>
              <a
                href="#"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Support
              </a>
            </nav>

            {/* Call to Action Button */}
            <div className="relative hidden md:items-center md:justify-center md:inline-flex group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="#"
                className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                role="button"
              >
                Start free trial
              </a>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {expanded && (
            <nav className="mt-4">
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <a
                  href="#"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Support
                </a>
                <div className="relative inline-flex items-center justify-center group">
                  <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
                  <a
                    href="#"
                    className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                    role="button"
                  >
                    Start free trial
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-12 overflow-hidden bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl relative">
          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2 gap-x-16">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Hello! I am Maytri.
              </h1>
              <p className="mt-4 text-lg font-normal text-gray-400 sm:mt-8">
                Maytri is more than just an AI—it’s your friend, your confidant,
                and your guide. Designed to bring warmth and connection to your
                life, Maytri adapts to your personality and preferences,
                offering meaningful conversations, support, and companionship.
                Create your own unique Maytri and experience the joy of having a
                virtual friend who truly understands you. Start your journey
                with Maytri today!
              </p>

              {/* Search Form */}
              <form className="relative mt-8 rounded-full sm:mt-12">
                <div className="relative">
                  <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500"></div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-6"></div>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Hey, I am feeling..."
                      className="block w-full py-4 pr-6 text-white placeholder-gray-500 bg-black border border-transparent rounded-full pl-14 sm:py-5 focus:border-transparent focus:ring-0"
                    />
                  </div>
                </div>
                <div className="sm:absolute flex sm:right-1.5 sm:inset-y-1.5 mt-4 sm:mt-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-5 text-sm font-semibold tracking-widest text-black uppercase transition-all duration-200 bg-white rounded-full sm:w-auto sm:py-3 hover:opacity-90"
                  >
                    Say Hello!
                  </button>
                </div>
              </form>

              {/* Trust Section */}
              {/* <div className="mt-8 sm:mt-12">
                <p className="text-lg font-normal text-white">
                  Trusted by 50k+ users
                </p>

                <div className="flex items-center mt-3">
                  <div className="flex">
                    {[...Array(4)].map((_, index) => (
                      <svg
                        key={index}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.8586 4.71248C11.2178 3.60691 12.7819 3.60691 13.1412 4.71248L14.4246 8.66264C14.5853 9.15706 15.046 9.49182 15.5659 9.49182H19.7193C20.8818 9.49182 21.3651 10.9794 20.4247 11.6626L17.0645 14.104C16.6439 14.4095 16.4679 14.9512 16.6286 15.4456L17.912 19.3958C18.2713 20.5013 17.0059 21.4207 16.0654 20.7374L12.7052 18.2961C12.2846 17.9905 11.7151 17.9905 11.2945 18.2961L7.93434 20.7374C6.99388 21.4207 5.72851 20.5013 6.08773 19.3958L7.37121 15.4456C7.53186 14.9512 7.35587 14.4095 6.93529 14.104L3.57508 11.6626C2.63463 10.9794 3.11796 9.49182 4.28043 9.49182H8.43387C8.95374 9.49182 9.41448 9.15706 9.57513 8.66264L10.8586 4.71248Z"
                          fill={`url(#b-${index})`}
                        />
                        <defs>
                          <linearGradient
                            id={`b-${index}`}
                            x1="3.07813"
                            y1="3.8833"
                            x2="23.0483"
                            y2="6.90161"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop
                              offset="0%"
                              style={{ stopColor: "var(--color-cyan-500)" }}
                            />
                            <stop
                              offset="100%"
                              style={{ stopColor: "var(--color-purple-500)" }}
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-base font-normal text-white">
                    4.1/5
                  </span>
                  <span className="ml-1 text-base font-normal text-gray-500">
                    (14k Reviews)
                  </span>
                </div>
              </div> */}
            </div>

            {/* Image Section */}
            <div className="relative">
              {/* Background SVG */}
              <div className="absolute inset-0">
                <svg
                  className="blur-3xl filter opacity-70"
                  style={{ filter: "blur(64px)" }}
                  width="444"
                  height="536"
                  viewBox="0 0 444 536"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M225.919 112.719C343.98 64.6648 389.388 -70.487 437.442 47.574C485.496 165.635 253.266 481.381 135.205 529.435C17.1445 577.488 57.9596 339.654 9.9057 221.593C-38.1482 103.532 107.858 160.773 225.919 112.719Z"
                    fill="url(#c)"
                  />
                  <defs>
                    <linearGradient
                      id="c"
                      x1="82.7339"
                      y1="550.792"
                      x2="-39.945"
                      y2="118.965"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: "var(--color-cyan-500)" }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: "var(--color-purple-500)" }}
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Main Illustration */}
              <Image
                className="relative w-full max-w-md mx-auto"
                src="/maytri/maytriAsianTrans.png"
                alt="Illustration"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ComponentName;
