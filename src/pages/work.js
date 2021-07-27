import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "../styles/global.css";

function WorkPage() {
  return (
    <Layout>
      <div class="wrapper clearfix">
      
      <div id="swup" class="xl:flex trans-fade">
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
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
                  The National Library of Australia
                </h2>
                <p class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >
                  Art direction, editorial, campaign
                </p>
              </div>
              <div class="xl:w-3/5">
                <a href="/nla"><img src="/img/nla/nla01-lazy.jpg" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad" class="lazyload"/></a>
              </div>
            </li>
            <li
              class="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all identity art-direction web editorial campaign"
            >
              <div class="xl:w-2/5">
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
                  Sydney Theatre Company
                </h2>
                <p
                  class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4"
                >
                  Identity, art direction, web, editorial, campaign
                </p>
              </div>
              <div class="xl:w-3/5">
                <a href="/stc"
                  ><img
                    src="/img/stc/stc01-lazy.jpg"
                    data-src="/img/stc/stc01.jpg"
                    data-srcset="/img/stc/stc01-1440w.jpg 1440w, /img/stc/stc01-800w.jpg 800w, /img/stc/stc01-1080w.jpg 1080w, /img/stc/stc01.jpg 2000w"
                    alt="STC posters on bus shelters in Sydney"
                    class="lazyload"
                /></a>
              </div>
            </li>
            <li
              class="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial"
            >
              <div class="xl:w-2/5">
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
                  Muse
                </h2>
                <p
                  class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4"
                >
                  Art direction, editorial
                </p>
              </div>
              <div class="xl:w-3/5">
                <a href="/muse"
                  ><img
                    src="/img/muse/m26-07-lazy.jpg"
                    data-src="/img/muse/m26-07.jpg"
                    data-srcset="/img/muse/m26-07-1440w.jpg 1440w, /img/muse/m26-07-800w.jpg 800w, /img/muse/m26-07-1080w.jpg 1080w, /img/muse/m26-07.jpg 2000w"
                    alt="A still life shot of museum artifacts"
                    class="lazyload"
                /></a>
              </div>
            </li>
            <li
              class="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all identity"
            >
              <div class="xl:w-2/5">
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
                  Headcase Hair
                </h2>
                <p
                  class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4"
                >
                  Identity
                </p>
              </div>
              <div class="xl:w-3/5">
                <a href="/headcase"
                  ><img
                    src="/img/headcase/headcase01-lazy.jpg"
                    data-src="/img/headcase/headcase01.jpg"
                    data-srcset="/img/headcase/headcase01-1440w.jpg 1440w, /img/headcase/headcase01-800w.jpg 800w, /img/headcase/headcase01-1080w.jpg 1080w, /img/headcase/headcase01.jpg 2000w"
                    alt="Herbs on a table"
                    class="lazyload"
                /></a>
              </div>
            </li>
            <li
              class="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction"
            >
              <div class="xl:w-2/5">
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
                  Naturopaths and Herbalists Association of Australia
                </h2>
                <p
                  class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4"
                >
                  Art direction
                </p>
              </div>
              <div class="xl:w-3/5">
                <a href="/nhaa"
                  ><img
                    src="/img/nhaa/nhaa-02-lazy.jpg"
                    data-src="/img/nhaa/nhaa-02.jpg"
                    data-srcset="/img/nhaa/nhaa-02-1440w.jpg 1440w, /img/nhaa/nhaa-02-800w.jpg 800w, /img/nhaa/nhaa-02-1080w.jpg 1080w, /img/nhaa/nhaa-02.jpg 2000w"
                    alt="Herbs on a table"
                    class="lazyload"
                /></a>
              </div>
            </li>
            <li
              class="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all identity web"
            >
              <div class="xl:w-2/5">
                <h2 class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
                  Sydney University Business School
                </h2>
                <p
                  class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4"
                >
                  Identity, web
                </p>
              </div>
              <div class="xl:w-3/5">
                <a href="/sydney-university-clas"
                  ><img
                    src="/img/clas/clas01-lazy.jpg"
                    data-src="/img/clas/clas01.jpg"
                    data-srcset="/img/clas/clas01-1440w.jpg 1440w, /img/clas/clas01-800w.jpg 800w, /img/clas/clas01-1080w.jpg 1080w, /img/clas/clas01.jpg 2000w"
                    alt="A woman in a classroom with the CLaS logo overlaid"
                    class="lazyload"
                /></a>
              </div>
            </li>
            </ul>
        </section>
      </div>
    </div>
    </Layout>
  );
}

export default WorkPage;