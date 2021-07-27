import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

function AboutPage() {
  return (
    <Layout>
      <div class="flex md:justify-end text-lg sm:text-2xl lg:text-3xl xl:text-4xl mb-8 lg:mb-16">
        <div class="md:w-7/12 lg:w-1/2">
          <p class="mb-4 lg:mb-8">Dialogic Studios is an agency that specialises in visual communications. Our strengths lie in brand identities, art direction, web design and publication design.</p>

          <p>Our services give organisations a visual voice that is true to their brand, values and personality. We also create systems that allow this voice to be replicated consistently and efficiently.</p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row">
        <div class="md:order-2 md:px-8 mb-2 w-1/2">
          <StaticImage src="../images/hon-boey.jpg" alt="Hon Boey" placeholder="blurred" />
        </div>
        <figcaption class="md:order-1 mb-8 lg:mb-16 text-xs sm:text-sm lg:base">Photo by Nisha Agiasotis</figcaption>
        <div class="md:w-7/12 lg:w-1/2 flex-shrink-0 md:order-3 text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
          <p class="mb-8 lg:mb-16">Dialogic was founded in 2017 by Hon Boey. In our short time we'vebeen lucky to work with clients such as <a href="/stc">Sydney Theatre Company</a>, <a href="/nla">the National Library of Australia</a>, <a href="/unsw-merch">UNSW</a> and <a href="/rise"> Refugees, Inmates, Survivors and Ex-detainees (RISE)</a>.</p>

          <p class="mb-4 lg:mb-8">In our spare time we <a href="https://www.sydney.edu.au/courses/units-of-study/2020/cael/cael3018.html"> teach design at Sydney University</a>, run the <a href="https://www.otherworldszines.com/"> Other Worlds Zine Fair</a>, look after our own <a href="http://www.psychichysteria.com/">record & publishing label</a> and take photos of <a href="http://www.psychichysteria.com/shop/clothes-bros"> people wearing the same clothes</a>.</p>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
