import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

function NLAPage() {
  return (
    <Layout>
        <h2 class="text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
        <p class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl mb-3 xl:mb-4 text-ds-grey">Raising funds for the digitisation of Australia's largest archive</p>

        <StaticImage class="w-full mb-6 md:mb-10 xl:mb-14" src="../images/nla01.jpg" alt="Two boys sitting on a porch in rural Australia" />
        <StaticImage class="w-full mb-6 md:mb-10 xl:mb-14" src="../images/nla01.jpg" alt="Two boys sitting on a porch in rural Australia" />

        <div class="md:flex md:items-start md:justify-between mb-6 md:mb-10 xl:mb-14">
            <div class="md:w-5/12">
                <p class="text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-8">The National Library of Australia holds Australia’s biggest archive – over 10 million items revealing the stories of the people and cultures that have shaped our nation. Together, they offer a portrait of our country available to those who visit it in Canberra. However, 98% of Australians live outside our nation’s capital. Their goal is to harness digital technologies to make our precious collection available online. For free. For all.</p>

                <p class="text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-8">We joined forces with the Library to creatively direct their fundraising campaign to make this goal a reality. We produced imagery that envisioned an Australia where this archive was accessible from our very own homes and documented scenes that this future would accomodate. These images formed the backbone of the campaign which included a beautifully constructed booklet, large-format signage and digital marketing.</p>
            </div>

            <table class="w-full md:w-1/2 table-fixed text-xs sm:text-sm lg:base font-light">
                <tr class="border-t border-b border-black">
                    <td class="w-2/5 py-2">Art direction<br/>
                        Publication design<br/>
                        Campaign design</td>
                    <td class="py-2 align-baseline">Dialogic Studios</td>
                </tr>
                <tr class="border-t border-b border-black">
                    <td class="py-2">Campaign Manager</td>
                    <td class="py-2">Kathryn Favelle</td>
                </tr>

                <tr class="border-t border-b border-black">
                    <td class="py-2">Photography</td>
                    <td class="py-2">
                        <a href="https://www.jamesgreen.com.au/">James Green</a>
                    </td>
                </tr>
                <tr class="border-t border-b border-black">
                    <td class="py-2">Printing</td>
                    <td class="py-2">
                        <a href="https://www.carbon8.com.au/">Carbon8</a>
                    </td>
                </tr>
                <tr class="border-t border-b border-black">
                    <td class="py-2">Folio photography</td>
                    <td class="py-2">
                        <a href="http://foliol.io/">Foliolio</a>
                    </td>
                </tr>
                <tr class="border-t border-b border-black">
                    <td class="py-2 align-baseline">Thank you</td>
                    <td class="py-2">The staff of the Library who allowed us into your homes to help create these beautiful images</td>
                </tr>
            </table>
        </div>

        <StaticImage class="w-full mb-6 md:mb-10 xl:mb-14" src="../images/nla01.jpg" alt="Two boys sitting on a porch in rural Australia" />

        <div class="md:w-7/12 lg:w-1/2 float-right">
            <p class="text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-8">A key part of the Library's campaign was a beautiful booklet to go to potential donors. For the cover, we paired the familiar kraft board of archival boxes with the marble patterning of the Library's foyer. And the inside housed James Green amazing shots of Australians interacting with the Digital Archives from the comfort of their own homes.</p>
        </div>

        <StaticImage class="w-full mb-6 md:mb-10 xl:mb-14" src="../images/nla01.jpg" alt="Two boys sitting on a porch in rural Australia" />

        <p class="text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-10 xl:mb-14">
            <a href="/work">View more of our work</a>
        </p>
    </Layout>
  );
}

export default NLAPage;
