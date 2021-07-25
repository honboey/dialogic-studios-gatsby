import * as React from "react"
import Layout from "../components/Layout"
import "../styles/global.css"

function IndexPage() {
  return(
    <Layout>
      <section className="md:w-7/12 lg:w-1/2 md:float-right mb-8 md:mb-12 xl:mb-16 text-2xl lg:text-3xl xl:text-4xl">
        <p>
          Dialogic Studios creates visual identities and communications for great organisations. We work on Gadigal land in Sydney, Australia.
        </p>
      </section>

      <section className="clear-right mb-12 mb-8 md:mb-12 xl:mb-16">
        <ul>
          <li className="mb-8 md:mb-12 xl:mb-16">
            <div className="lg:flex items-baseline mb-1 md:mb-3 xl:mb-4">
              <div className="lg:w-1/2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">ational Library of Australia</h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">Art direction, editorial, campaign</p>
              </div>
            </div>
            <a href="/nla">
              <img
                className="w-full lazyload"
                src="/img/nla/nla01-lazy.jpg"
                data-src="/img/nla/nla01.jpg"
                data-srcset="/img/nla/nla01-1440w.jpg 1440w, /img/nla/nla01-800w.jpg 800w, /img/nla/nla01-1080w.jpg 1080w, /img/nla/nla01.jpg 2000w"
                alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/></a>
          </li>

          <li className="mb-8 md:mb-12 xl:mb-16">
            <div className="lg:flex items-baseline mb-1 md:mb-3 xl:mb-4">
              <div className="lg:w-1/2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">Sydney Theatre Company</h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">
                  Identity, art direction, web, editorial, campaign
                </p>
              </div>
            </div>
            <a href="/stc"><img
                className="w-full lazyload"
                src="/img/stc/stc01-lazy.jpg"
                data-src="/img/stc/stc01.jpg"
                data-srcset="/img/stc/stc01-1440w.jpg 1440w, /img/stc/stc01-800w.jpg 800w, /img/stc/stc01-1080w.jpg 1080w, /img/stc/stc01.jpg 2000w"
                alt="STC posters on bus shelters in Sydney"/></a>
          </li>

          <li className="mb-8 md:mb-12 xl:mb-16">
            <div className="lg:flex items-baseline mb-1 md:mb-3 xl:mb-4">
              <div className="lg:w-1/2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">Muse</h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">
                  Art direction, editorial
                </p>
              </div>
            </div>
            <a href="/muse"><img
                className="w-full lazyload"
                src="/img/muse/m26-07-lazy.jpg"
                data-src="/img/muse/m26-07.jpg"
                data-srcset="/img/muse/m26-07-1440w.jpg 1440w, /img/muse/m26-07-800w.jpg 800w, /img/muse/m26-07-1080w.jpg 1080w, /img/muse/m26-07.jpg 2000w"
                alt="A studio shot of a parrot, an ancient Greek vase and a impressionist painting"/></a>
          </li>
          
          <li className="mb-8 md:mb-12 xl:mb-16">
            <div className="lg:flex items-baseline mb-1 md:mb-3 xl:mb-4">
              <div className="lg:w-1/2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">Headcase Hair</h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">
                  Branding
                </p>
              </div>
            </div>
            <a href="/headcase"><img
                className="w-full lazyload"
                src="/img/headcase/headcase01-lazy.jpg"
                data-src="/img/headcase/headcase01.jpg"
                data-srcset="/img/headcase/headcase01-1440w.jpg 1440w, /img/headcase/headcase01-800w.jpg 800w, /img/headcase/headcase01-1080w.jpg 1080w, /img/headcase/headcase01.jpg 2000w"
                alt="Herbs on a table"/></a>
          </li>
        </ul>
        <p className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">
          <a href="/work">View our complete portfolio</a>
        </p>
      </section>

      <section className="flex mb-12 md:mb-10 xl:mb-12">
        <div className="w-1/3 md:w-1/2">
          <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">Contact us</h2>
        </div>
        <div className="w-2/3 md:w-1/2">
          <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-8">
            If you have a project that you’d like to collaborate on then
            please drop us a line. We’d love to hear from you.
          </p>

          <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-8">
            <a href="mailto:hello@dialogicstudios.com.au">hello@dialogicstudios.com.au</a><br />
            <a href="tel:+61405266261">+61 405 266 261</a><br />
            <a href="https://www.instagram.com/dialogicstudios/">@dialogicstudios</a>
          </p>

          <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl">
            <a href="https://goo.gl/maps/DtrAC4Nduf4KRQsK7">3A Joynton Ave, Zetland<br />
              Eora Nation, NSW 2017</a>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
