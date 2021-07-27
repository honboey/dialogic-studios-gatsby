import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

function ContactPage() {
  return (
    <Layout>
      <div class="flex md:justify-end mb-8 lg:mb-16">
        <div class="md:w-7/12 lg:w-1/2">
          <p class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">Telephone / WhatsApp</p>
          <p class="mb-4 lg:mb-8"><a href="tel:+61405266261">+61 405 266 261</a></p>

          <p class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">Email</p>
          <p class="mb-4 lg:mb-8"><a href="mailto:hello@dialogicstudios.com.au">hello@dialogicstudios.com.au</a></p>

          <p class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">Instagram</p>
          <p class="mb-4 lg:mb-8"><a href="https://instagram.com/dialogicstudios">@dialogicstudios</a></p>

          <p class="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">Office</p>
          <p class="">Joynton Avenue Creative Centre<br/>
              <a href="https://goo.gl/maps/DtrAC4Nduf4KRQsK7">3A Joynton Ave, Zetland<br/>
              Eora Nation, NSW 2017</a><br/>
              (Enter from Hansard St)
          </p>
        </div>
      </div>

      <div class="flex flex-col md:flex-row lg:base mb-8 lg:mb-16">
        <div class="md:w-4/5 flex-shrink-0 mr-4">
          <StaticImage src="../images/contact.jpg" alt="Joynton Avenue Creative Centre building" class="w-full mb-2"/>
        </div>
        <div class="text-xs sm:text-sm lg:base">
          <p>Our offices at Joynton Avenue Creative Centre were designed by <a href="http://peterstutchbury.com.au/jacc.html">Peter Stutchbury Architects</a>. Photo by <a href="https://micnic.com.au/">Michael Nicholson</a>.</p>
        </div>
      </div>

      <div class="flex md:justify-end">
        <section class="md:w-7/12 lg:w-1/2">
          <p class="mb-4 lg:mb-8">If you have a project you’d like to collaborate on then drop us a line by phone or email. We’ll have a chat with you about what you are after and send through a pack that outlines our process and fees.</p>

          <p>Most jobs start with a briefing workshop followed by concept designs and roll out. We know that the journey can be confusing so we’ve laid it all out in our process and fees pack. Get in touch if you’d like to have a read.</p>
        </section>
      </div>
    </Layout>
  );
}

export default ContactPage;