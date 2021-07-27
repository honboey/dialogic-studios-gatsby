import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../styles/global.css";

function IndexPage() {
  return (
    <Layout>
      <section className="md:w-7/12 lg:w-1/2 md:float-right mb-8 md:mb-12 xl:mb-16 text-2xl lg:text-3xl xl:text-4xl leading-normal">
        <p>Dialogic Studios creates visual identities and communications for great organisations. We work on Gadigal land in Sydney, Australia.</p>
      </section>

      <section className="clear-right mb-8 md:mb-12 xl:mb-16">
        <ul>
          <li className="mb-8 md:mb-12 xl:mb-16">
            <div className="lg:flex items-baseline mb-1 md:mb-3 xl:mb-4">
              <div className="lg:w-1/2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">National Library of Australia</h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">Art direction, editorial, campaign</p>
              </div>
            </div>
            <Link to="/nla">
              <StaticImage className="w-full" src="../images/nla01.jpg" placeholder="blurred" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/>
            </Link>
          </li>

          <li className="mb-8 md:mb-12 xl:mb-16">
            <div className="lg:flex items-baseline mb-1 md:mb-3 xl:mb-4">
              <div className="lg:w-1/2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">National Library of Australia</h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">Art direction, editorial, campaign</p>
              </div>
            </div>
            <Link to="/nla">
              <StaticImage className="w-full" src="../images/nla01.jpg" placeholder="blurred" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/>
            </Link>
          </li>

          <li className="mb-8 md:mb-12 xl:mb-16">
            <div className="lg:flex items-baseline mb-1 md:mb-3 xl:mb-4">
              <div className="lg:w-1/2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">National Library of Australia</h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">Art direction, editorial, campaign</p>
              </div>
            </div>
            <Link to="/nla">
              <StaticImage className="w-full" src="../images/nla01.jpg" placeholder="blurred" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/>
            </Link>
          </li>

          <li className="mb-8 md:mb-12 xl:mb-16">
            <div className="lg:flex items-baseline mb-1 md:mb-3 xl:mb-4">
              <div className="lg:w-1/2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">National Library of Australia</h2>
              </div>
              <div className="lg:w-1/2">
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">Art direction, editorial, campaign</p>
              </div>
            </div>
            <Link to="/nla">
              <StaticImage className="w-full" src="../images/nla01.jpg" placeholder="blurred" alt="A photo from the National Library fundraising campaign art directed by Dialogic Studios. A man and his two sons sitting on a patio in rural Australia looking at an iPad"/>
            </Link>
          </li>
        </ul>

        <p className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl"><Link to="/work">View our complete portfolio</Link></p>
      </section>

      <section className="flex mb-12 md:mb-10 xl:mb-12">
        <div className="w-1/3 md:w-1/2">
          <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">Contact us</h2>
        </div>
        <div className="w-2/3 md:w-1/2">
          <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-8">If you have a project that you’d like to collaborate on then please drop us a line. We’d love to hear from you.</p>

          <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl mb-4 lg:mb-8">
            <a href="mailto:hello@dialogicstudios.com.au">hello@dialogicstudios.com.au</a><br/>
            <a href="tel:+61405266261">+61 405 266 261</a><br/>
            <a href="https://www.instagram.com/dialogicstudios/">@dialogicstudio</a>
          </p>

          <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl">
            <a href="https://goo.gl/maps/DtrAC4Nduf4KRQsK7">3A Joynton Ave, Zetland<br/>
              Eora Nation, NSW 2017</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
