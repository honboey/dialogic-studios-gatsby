import * as React from "react";
import { Link } from "gatsby";
import "../styles/global.css";

function Layout({ children }) {
  return (
    <>
      <div className="wrapper text-lg sm:text-2xl lg:text-3xl xl:text-4xl leading-normal">
        <header className="mb-8 md:mb-12 xl:mb-16">
          <nav className="flex">
            <div className="h-8 w-1/2 md:w-5/12 lg:w-1/2 pt-1">
              <h1 className="lg:w-3/4 xl:w-1/2">
                <Link to="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 200 1000 1000"
                  >
                    <path
                      className="cls-1"
                      d="M0,266.33V222.26H11.47c6.55,0,11.73,4.6,11.73,11.6v20.87c0,7.07-5,11.6-11.73,11.6Zm20-32.66a8.59,8.59,0,0,0-8.55-8.56H3.24v38.37h8.17A8.26,8.26,0,0,0,20,255.12Z"
                    />
                    <path
                      className="cls-1"
                      d="M33.77,266.33v-2.65h10V237.43h-10V234.7H46.86v29H57v2.65Zm10.88-39.21A2.63,2.63,0,0,1,42,224.46a2.69,2.69,0,1,1,2.65,2.66Z"
                    />
                    <path
                      className="cls-1"
                      d="M85.16,266.33v-4.14c-1.49,2.33-4.8,4.66-9.72,4.66-6.29,0-10.5-3.76-10.5-10.82V245.27c0-6.87,4.28-11.08,11-11.08,4.8,0,7.84,2.26,9.27,4.53v-4h3v31.63Zm-.06-20.54c0-5.71-4-8.82-8.88-8.82s-8.17,3.11-8.17,8.36V255.9c0,5.18,3.3,8.16,8.17,8.16s8.88-3.3,8.88-9Z"
                    />
                    <path
                      className="cls-1"
                      d="M97.41,266.33v-2.65h10V225h-10v-2.72H110.5v41.42h10.11v2.65Z"
                    />
                    <path
                      className="cls-1"
                      d="M149.19,255.31c0,7.13-5.18,11.54-11.73,11.54-6.29,0-11.47-4.21-11.47-11.54v-9.52c0-7.2,5.25-11.6,11.73-11.6,6.22,0,11.47,4.14,11.47,11.6Zm-3.05-9.65a8.56,8.56,0,1,0-17.11,0v9.78a8.56,8.56,0,1,0,17.11,0Z"
                    />
                    <path
                      className="cls-1"
                      d="M165.78,278.26v-2.85h3.05c4.53,0,8.49-2.4,8.49-7.85v-5.31c-1.49,2.33-4.67,4.6-9.59,4.6-6.23,0-10.57-3.89-10.57-10.76V245.2c0-6.67,4.41-11,11.08-11,4.74,0,7.72,2.26,9.14,4.53v-4h3v32.93c0,6.61-4.73,10.63-11.21,10.63Zm11.54-32.54c0-5.7-3.89-8.68-8.75-8.68s-8.36,3-8.36,8.23V256c0,5.19,3.43,8.1,8.29,8.1s8.82-3.17,8.82-8.94Z"
                    />
                    <path
                      className="cls-1"
                      d="M189.63,266.33v-2.65h10.05V237.43H189.63V234.7h13.09v29h10.11v2.65Zm10.89-39.21a2.63,2.63,0,0,1-2.66-2.66,2.69,2.69,0,1,1,5.38,0A2.65,2.65,0,0,1,200.52,227.12Z"
                    />
                    <path
                      className="cls-1"
                      d="M244,255.83c-.07,7.13-5.38,11-11.67,11s-11.54-4.34-11.54-11.15V245.46c0-6.87,5.32-11.27,11.8-11.27,6.29,0,11.28,3.75,11.41,10.88h-3c-.19-5.44-4-8-8.56-8s-8.55,3.17-8.55,8.23v10.56c0,5.06,4,8.17,8.62,8.17,4.47,0,8.3-2.53,8.49-8.17Z"
                    />
                    <path
                      className="cls-1"
                      d="M288.85,254.47c.07,6.55,4.15,9.4,8.56,9.4,4.15,0,8.23-2.72,8.23-7.58,0-9.27-19.7-13.29-19.7-24.37,0-6.16,5.18-10.18,11.34-10.18,5.77,0,11.28,3.44,11.28,12.25h-3.05c-.07-6.09-3.83-9.33-8.62-9.33-4.34,0-7.71,2.85-7.71,6.93,0,9.4,19.83,13.87,19.83,24.57,0,6.35-5.32,10.69-11.8,10.69-6,0-11.47-3.56-11.53-12.38Z"
                    />
                    <path
                      className="cls-1"
                      d="M333.25,266.33c-6.48,0-8.88-2.59-8.88-9V237.43h-7.84V234.7h7.84v-8.16h3v8.16H338.5v2.73H327.41v19.38c0,4.79,1.43,6.74,6.16,6.74h5.06v2.78Z"
                    />
                    <path
                      className="cls-1"
                      d="M368.24,266.33v-4.4c-1.29,2.39-4.53,4.92-9.65,4.92-6.61,0-10.5-4.08-10.5-10.63V234.7h3v21.13c0,5.19,3.05,8.23,8.1,8.23s9-3.37,9-8.55V234.7h3.05v31.63Z"
                    />
                    <path
                      className="cls-1"
                      d="M400.78,266.33v-4.21c-1.49,2.33-4.8,4.73-9.72,4.73-6.29,0-10.5-4-10.5-10.89V245.33c0-6.67,4.27-11.14,10.95-11.14,4.73,0,7.78,2.26,9.2,4.53V222.26h3.05v44.07Zm-.07-20.54c0-5.64-4-8.82-8.88-8.82s-8.23,3.18-8.23,8.43v10.43c0,5.25,3.37,8.23,8.17,8.23,5.05,0,8.94-3.37,8.94-9.13Z"
                    />
                    <path
                      className="cls-1"
                      d="M414.32,266.33v-2.65h10.05V237.43H414.32V234.7h13.09v29h10.11v2.65Zm10.89-39.21a2.63,2.63,0,0,1-2.66-2.66,2.69,2.69,0,1,1,5.38,0A2.64,2.64,0,0,1,425.21,227.12Z"
                    />
                    <path
                      className="cls-1"
                      d="M467.4,255.31c0,7.13-5.18,11.54-11.73,11.54-6.29,0-11.47-4.21-11.47-11.54v-9.52c0-7.2,5.25-11.6,11.73-11.6,6.22,0,11.47,4.14,11.47,11.6Zm-3-9.65a8.56,8.56,0,1,0-17.11,0v9.78a8.56,8.56,0,1,0,17.11,0Z"
                    />
                    <path
                      className="cls-1"
                      d="M496.24,242.68c-.45-3.89-4.34-5.71-8.17-5.71-4.14,0-8,2.14-8,5.71,0,8.49,20,3.69,20,15.23,0,5.77-5.64,8.94-11.73,8.94-5.71,0-11-2.79-11.67-9.07h3.18c.58,4.08,4.15,6.28,8.75,6.28,4.21,0,8.23-2.2,8.23-5.83,0-9.07-19.77-4-19.77-15.23,0-5.31,5.25-8.81,11.34-8.81,5.12,0,10.5,2.46,11.09,8.49Z"
                    />
                  </svg>
                </Link>
              </h1>
            </div>
            <ul className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey flex justify-between w-1/2 md:w-7/12 lg:w-1/2">
              <li>
                <Link to="/work">Work</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}

        <footer>
          <div className="border-t border-black flex flex-wrap justify-between pt-12 md:pt-16 xl:pt-20 text-xs sm:text-sm lg:base">
            <nav className="w-1/3 md:w-1/12">
              <ul>
                <li>
                  <Link to="/work">Work</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li className="mb-3 lg:mb-6">
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="https://www.instagram.com/dialogicstudios/">
                    Instagram
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="w-2/3 md:w-1/4">
              <p className="mb-3 lg:mb-6">Site designed by Dialogic Studios.</p>
              <p>
                Site built by Dialogic Studios and{" "}
                <a href="https://thislittleduck.com/">This Little Duck</a>.
              </p>

              <p className="mb-6">
                Type designed by
                <a href="https://klim.co.nz/">Klim Type Foundry</a>.
              </p>

              <p className="mb-6">
                This site was hand coded using the
                <a href="https://tailwindcss.com/">TailwindCSS</a> framework.
              </p>
            </div>

            <div className="md:w-1/2">
              <p className="mb-3 lg:mb-6">
                The Gadigal People of the Eora Nation were some of the world’s
                very first designers. Their experience spans over 40,000 years
                and their expertise in graphic storytelling has never been
                surpassed. We acknowledge and pay respect to their work and to
                their Elders, past, present and future.
              </p>

              <p>Always was, always will be, Aboriginal land.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
