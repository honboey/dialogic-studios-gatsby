import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

function WorkPage() {
  return (
    <Layout>
      
      <div className="xl:flex">
        <nav className="flex xl:block xl:w-1/6 text-sm sm:text-lg lg:text-xl xl:text-2xl leading-normal lg:leading-normal xl:leading-normal border-t border-b border-black xl:border-none py-3 mb-8 md:mb-12 xl:mb-16">
          <div className="w-1/2 md:w-5/12 lg:w-1/2 xl:w-full mb-4 lg:mb-8">
            <h2>Our services</h2>
          </div>
          <div id="services" className="w-1/2 md:w-7/12 lg:w-1/2 xl:w-full flex xl:block" >
            <div className="w-1/2 xl:w-full">
              <ul>
                <li><a className="all text-ds-orange" href="#">All</a></li>
                <li><a className="identity" href="#">Identity</a></li>
                <li><a className="art-direction" href="#">Art direction</a></li>
                <li><a className="web" href="#">Web</a></li>
              </ul>
            </div>
            <div className="w-1/2 xl:w-full">
              <ul>
                <li><a className="editorial" href="#">Editorial</a></li>
                <li><a className="campaign" href="#">Campaign</a></li>
                <li><a className="packaging" href="#">Packaging</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <section id="work" className="xl:w-5/6">
          <ul>
            <li className="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial campaign" >
              <div className="xl:w-2/5">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >Art direction, editorial, campaign</p>
              </div>
              <div className="xl:w-3/5">
                <Link to="/projects/nla"><StaticImage src="../images/nla01.jpg" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/></Link>
              </div>
            </li>
            
            <li className="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial campaign" >
              <div className="xl:w-2/5">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >Art direction, editorial, campaign</p>
              </div>
              <div className="xl:w-3/5">
                <Link to="/projects/nla"><StaticImage src="../images/nla01.jpg" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/></Link>
              </div>
            </li>
            
            <li className="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial campaign" >
              <div className="xl:w-2/5">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >Art direction, editorial, campaign</p>
              </div>
              <div className="xl:w-3/5">
                <Link to="/projects/nla"><StaticImage src="../images/nla01.jpg" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/></Link>
              </div>
            </li>
            
            <li className="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial campaign" >
              <div className="xl:w-2/5">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >Art direction, editorial, campaign</p>
              </div>
              <div className="xl:w-3/5">
                <Link to="/projects/nla"><StaticImage src="../images/nla01.jpg" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/></Link>
              </div>
            </li>
            
            
            
            </ul>
        </section>
      </div>
    </Layout>
  );
}

export default WorkPage;