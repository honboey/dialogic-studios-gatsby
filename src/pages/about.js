import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

function AboutPage() {
  return (
    <Layout>
      <div className="text-2xl leading-normal lg:text-3xl lg:leading-normal xl:text-4xl xl:leading-normal flex md:justify-end mb-8 lg:mb-16">
        <div className="md:w-7/12 lg:w-1/2">
          <p className="mb-4 lg:mb-8">Dialogic Studios is an agency that specialises in visual communications. Our strengths lie in brand identities, art direction, web design and publication design.</p>

          <p>Our services give organisations a visual voice that is true to their brand, values and personality. We also create systems that allow this voice to be replicated consistently and efficiently.</p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:order-2 md:px-8 mb-2 w-1/2">
          <StaticImage src="../images/hon-boey.jpg" alt="Hon Boey" placeholder="blurred" />
        </div>
        <figcaption className="md:order-1 mb-8 lg:mb-16 text-xs sm:text-sm lg:base">Photo by Nisha Agiasotis</figcaption>
        <div className="text-2xl leading-normal lg:text-3xl lg:leading-normal xl:text-4xl xl:leading-normal md:w-7/12 lg:w-1/2 flex-shrink-0 md:order-3">
          <p className="mb-8 lg:mb-16">Dialogic was founded in 2017 by Hon Boey. In our short time we'vebeen lucky to work with clients such as <Link to="/stc">Sydney Theatre Company</Link>, <Link to="/nla">the National Library of Australia</Link>, <Link to="/unsw-merch">UNSW</Link> and <Link to="/rise"> Refugees, Inmates, Survivors and Ex-detainees (RISE)</Link>.</p>

          <p className="mb-4 lg:mb-8">In our spare time we <a href="https://www.sydney.edu.au/courses/units-of-study/2020/cael/cael3018.html"> teach design at Sydney University</a>, run the <a href="https://www.otherworldszines.com/"> Other Worlds Zine Fair</a>, look after our own <a href="http://www.psychichysteria.com/">record & publishing label</a> and take photos of <a href="http://www.psychichysteria.com/shop/clothes-bros"> people wearing the same clothes</a>.</p>
        </div>
      </div>
    </Layout>
  );
}

export default AboutPage;
