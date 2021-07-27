import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "../styles/global.css";

function NLAPage() {
  return (
    <Layout>
      <div
            class="wrapper ">
            

            <section id="swup" class="trans-fade">
                <h2 class="text-2xl lg:text-3xl xl:text-4xl">The National Library of Australia</h2>
                <p class="text-lg sm:text-2xl lg:text-3xl xl:text-4xl mb-3 xl:mb-4 text-ds-grey">Raising funds for the digitisation of Australia's largest archive</p>

                <figure class="mb-6 md:mb-10 xl:mb-14"><img class="w-full lazyload" src="/img/nla/nla01-lazy.jpg" data-src="/img/nla/nla01.jpg" data-srcset="/img/nla/nla01-1440w.jpg 1440w, /img/nla/nla01-800w.jpg 800w, /img/nla/nla01-1080w.jpg 1080w, /img/nla/nla01.jpg 2000w" alt="Two boys sitting on a porch in rural Australia"></img></figure>
                <figure class="mb-6 md:mb-10 xl:mb-14"><img class="w-full lazyload" src="/img/nla/nla05-lazy.jpg" data-src="/img/nla/nla05.jpg" data-srcset="/img/nla/nla05-1440w.jpg 1440w, /img/nla/nla05-800w.jpg 800w, /img/nla/nla05-1080w.jpg 1080w, /img/nla/nla05.jpg 2000w" alt="A woman and child sitting on a"></img></figure>

                <div class="md:flex md:justify-between mb-6 md:mb-10 xl:mb-14">
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

                <figure class="mb-6 md:mb-10 xl:mb-14"><img class="w-full lazyload" src="/img/nla/nla-book-01-lazy.jpg" data-src="/img/nla/nla-book-01.jpg" data-srcset="/img/nla/nla-book-01-1440w.jpg 1440w, /img/nla/nla-book-01-800w.jpg 800w, /img/nla/nla-book-01-1080w.jpg 1080w, /img/nla/nla-book-01.jpg 2000w" alt="Treasured Voices booklet"></img></figure>

                <div class="lg:flex lg:justify-between">
                    <figure class="lg:w-1/2 lg:mr-4 mb-6 md:mb-10 xl:mb-14"><img class="w-full lazyload" src="/img/nla/nla-book-02-lazy.jpg" data-src="/img/nla/nla-book-02.jpg" data-srcset="/img/nla/nla-book-02-800w.jpg 800w, /img/nla/nla-book-02-1080w.jpg 1080w, /img/nla/nla-book-02.jpg 2000w" sizes="(min-width:1024px) 50vw" alt="Treasured Voices booklet"></img></figure>
                    <figure class="lg:w-1/2 mb-6 md:mb-10 xl:mb-14"><img class="w-full lazyload" src="/img/nla/nla-book-03-lazy.jpg" data-src="/img/nla/nla-book-03.jpg" data-srcset="/img/nla/nla-book-03-800w.jpg 800w, /img/nla/nla-book-03-1080w.jpg 1080w, /img/nla/nla-book-03.jpg 2000w" sizes="(min-width:1024px) 50vw" alt="Treasured Voices booklet"></img></figure>
                </div>
                <div class="lg:flex lg:justify-between">
                    <figure class="lg:w-1/2 lg:mr-4 mb-6 md:mb-10 xl:mb-14"><img class="w-full lazyload" src="/img/nla/nla-book-04-lazy.jpg" data-src="/img/nla/nla-book-04.jpg" data-srcset="/img/nla/nla-book-04-800w.jpg 800w, /img/nla/nla-book-04-1080w.jpg 1080w, /img/nla/nla-book-04.jpg 2000w" sizes="(min-width:1024px) 50vw" alt="Treasured Voices booklet"></img></figure>
                    <figure class="lg:w-1/2 mb-6 md:mb-10 xl:mb-14"><img class="w-full lazyload" src="/img/nla/nla-book-05-lazy.jpg" data-src="/img/nla/nla-book-05.jpg" data-srcset="/img/nla/nla-book-05-800w.jpg 800w, /img/nla/nla-book-05-1080w.jpg 1080w, /img/nla/nla-book-05.jpg 2000w" sizes="(min-width:1024px) 50vw" alt="Treasured Voices booklet"></img></figure>
                </div>


                <div class="md:w-7/12 lg:w-1/2 float-right">
                    <p class="text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-8">A key part of the Library's campaign was a beautiful booklet to go to potential donors. For the cover, we paired the familiar kraft board of archival boxes with the marble patterning of the Library's foyer. And the inside housed James Green amazing shots of Australians interacting with the Digital Archives from the comfort of their own homes.</p>
                </div>


                <figure class="md:w-1/2 float-left mr-6 mb-6 md:mb-10 xl:mb-14">
                    <img class="w-full lazyload" src="/img/nla/nla02-lazy.jpg" data-src="/img/nla/nla02.jpg" data-srcset="/img/nla/nla02-800w.jpg 800w, /img/nla/nla02.jpg 2000w" alt="Two hands holding a document from the Library archive"></img></figure>
                <figure class="md:w-1/2 clear-right float-left mb-6 md:mb-10 xl:mb-14">
                    <img class="w-full lazyload" src="/img/nla/nla03-lazy.jpg" data-src="/img/nla/nla03.jpg" data-srcset="/img/nla/nla03-800w.jpg 800w, /img/nla/nla03.jpg 2000w" alt="A man reading a document from the Library archive"></img></figure>


                <figure class="mb-6 md:mb-10 xl:mb-14"><img class="w-full lazyload" src="/img/nla/nla04-lazy.jpg" data-src="/img/nla/nla04.jpg" data-srcset="/img/nla/nla04-800w.jpg 800w, /img/nla/nla04-1080w.jpg 1080w, /img/nla/nla04-1440w.jpg 1440w, /img/nla/nla04.jpg 2000w" alt="A family in a living room"></img></figure>

                <h2 class="text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-10 xl:mb-14">
                    <a href="/work">View more of our work</a>
                </h2>
            </section>
        </div>
    </Layout>
  );
}

export default NLAPage;
