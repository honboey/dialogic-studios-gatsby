import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

function WorkPage() {
  return (
    <Layout>
      
      <div class="xl:flex">
        <nav class="flex xl:block xl:w-1/6 text-sm sm:text-lg lg:text-xl xl:text-2xl border-t border-b border-black xl:border-none py-3 mb-8 md:mb-12 xl:mb-16">
          <div class="w-1/2 md:w-5/12 lg:w-1/2 xl:w-full mb-4 lg:mb-8">
            <h2>Our services</h2>
          </div>
          <div id="services" class="w-1/2 md:w-7/12 lg:w-1/2 xl:w-full flex xl:block" >
            <div class="w-1/2 xl:w-full">
              <ul>
                <li><a class="all text-ds-orange" href="#">All</a></li>
                <li><a class="identity" href="#">Identity</a></li>
                <li><a class="art-direction" href="#">Art direction</a></li>
                <li><a class="web" href="#">Web</a></li>
              </ul>
            </div>
            <div class="w-1/2 xl:w-full">
              <ul>
                <li><a class="editorial" href="#">Editorial</a></li>
                <li><a class="campaign" href="#">Campaign</a></li>
                <li><a class="packaging" href="#">Packaging</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <section id="work" class="xl:w-5/6">
          <ul>
            <li class="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial campaign" >
              <div class="xl:w-2/5">
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
                <p class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >Art direction, editorial, campaign</p>
              </div>
              <div class="xl:w-3/5">
                <a href="/nla"><StaticImage src="../images/nla01.jpg" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/></a>
              </div>
            </li>
            
            <li class="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial campaign" >
              <div class="xl:w-2/5">
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
                <p class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >Art direction, editorial, campaign</p>
              </div>
              <div class="xl:w-3/5">
                <a href="/nla"><StaticImage src="../images/nla01.jpg" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/></a>
              </div>
            </li>
            
            <li class="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial campaign" >
              <div class="xl:w-2/5">
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
                <p class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >Art direction, editorial, campaign</p>
              </div>
              <div class="xl:w-3/5">
                <a href="/nla"><StaticImage src="../images/nla01.jpg" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/></a>
              </div>
            </li>
            
            <li class="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial campaign" >
              <div class="xl:w-2/5">
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
                <p class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >Art direction, editorial, campaign</p>
              </div>
              <div class="xl:w-3/5">
                <a href="/nla"><StaticImage src="../images/nla01.jpg" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/></a>
              </div>
            </li>
            
            </ul>
        </section>
      </div>
    </Layout>
  );
}

export default WorkPage;