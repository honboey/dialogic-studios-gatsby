import * as React from "react";
import Layout from "../components/Layout";
import FeaturedProjectItem from "../components/FeaturedProjectItem";
import { graphql, Link } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "../styles/global.css";

function IndexPage( {data} ) {
  console.log(data.allPrismicProject.nodes[0].data.feature_image.alt)
  return (
    <Layout>
      <section className="text-2xl leading-normal lg:text-3xl lg:leading-normal xl:text-4xl xl:leading-normal md:w-7/12 lg:w-1/2 md:float-right mb-8 md:mb-12 xl:mb-16">
        <p>Dialogic Studios is the personal graphic design practice of Hon Boey. We work on Gadigal land in Sydney, Australia.</p>
      </section>

      <section className="clear-right mb-8 md:mb-12 xl:mb-16">
        <ul>
          {
            data.allPrismicProject.nodes.map((element) => (
              <FeaturedProjectItem
                key={element.uid}
                projectName={element.data.project_title.text}
                services={element.tags}
                featureImage={getImage(element.data.feature_image.gatsbyImageData)}
                altText={element.data.feature_image.alt}
                slug={element.uid}
                />
            ))
          }
        </ul>

        <p className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl"><Link to="/work">View our complete portfolio</Link></p>
      </section>

      <section className="flex mb-12 md:mb-10 xl:mb-12">
        <div className="w-1/3 md:w-1/2">
          <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">Contact us</h2>
        </div>
        <div className="w-2/3 md:w-1/2">
          <p className="mb-4 lg:mb-8">If you have a project that you’d like to collaborate on then please drop us a line. We’d love to hear from you.</p>

          <p className="mb-4 lg:mb-8">
            <a href="mailto:hello@dialogicstudios.com.au">hello@dialogicstudios.com.au</a><br/>
            <a href="tel:+61405266261">+61 405 266 261</a><br/>
            <a href="https://www.instagram.com/dialogicstudios/">@dialogicstudio</a>
          </p>

          <p className="">
            <a href="https://goo.gl/maps/DtrAC4Nduf4KRQsK7">3A Joynton Ave, Zetland<br/>
              Eora Nation, NSW 2017</a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
query {
  allPrismicProject(
    sort: {fields: data___order}
    filter: {data: {featured: {eq: true}}}
  ) {
    nodes {
      data {
        project_title {
          text
        }
        order
        feature_image {
          gatsbyImageData(placeholder: BLURRED)
          alt
        }
      }
      uid
      tags
    }
  }
}
`
export default IndexPage;
