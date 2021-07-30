import * as React from "react";
import Layout from "../components/Layout";
import ProjectItem from "../components/ProjectItem";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import "../styles/global.css";

function WorkPage( {data} ) {
  return (
    <Layout>
      <div className="xl:flex">
        <nav className="flex xl:block xl:w-1/6 text-sm sm:text-lg lg:text-xl xl:text-2xl leading-normal lg:leading-normal xl:leading-normal border-t border-b border-black xl:border-none py-3 mb-8 md:mb-12 xl:mb-16">
          <div className="w-1/2 md:w-5/12 lg:w-1/2 xl:w-full mb-4 lg:mb-8">
            <h2>Our services</h2>
          </div>
          <div id="services" className="w-1/2 md:w-7/12 lg:w-1/2 xl:w-full flex xl:block" >
            <div className="w-1/2 xl:w-full">
              <ul>
                <li><a className="all text-ds-orange" href="#">All</a></li>
                <li><a className="identity" href="#">Identity</a></li>
                <li><a className="art-direction" href="#">Art direction</a></li>
                <li><a className="web" href="#">Web</a></li>
              </ul>
            </div>
            <div className="w-1/2 xl:w-full">
              <ul>
                <li><a className="editorial" href="#">Editorial</a></li>
                <li><a className="campaign" href="#">Campaign</a></li>
                <li><a className="packaging" href="#">Packaging</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <section id="work" className="xl:w-5/6">
          <ul>
            {
              data.allPrismicProject.nodes.map((element) => (
                <ProjectItem 
                  projectName={element.data.project_title.text}
                  services={element.data.services}
                  featureImage={getImage(element.data.feature_image.gatsbyImageData)}
                  altText={element.data.feature_image.alt}
                  slug={element.uid}
                  />
              ))
            }
          </ul>
        </section>
      </div>
    </Layout>
  );
}

export const query = graphql`
query {
  allPrismicProject(
    sort: {fields: data___order}    
  ) {
    nodes {
      data {
        project_title {
          text
        }
        order
        services
        feature_image {
          gatsbyImageData(placeholder: BLURRED)
          alt
        }
      }
      uid
    }
  }
}
`

export default WorkPage;