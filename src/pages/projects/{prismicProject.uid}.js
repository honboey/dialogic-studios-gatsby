import * as React from "react";

import Layout from "../../components/Layout";
import SliceZone from '../../components/SliceZone'
import { graphql, Link } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { RichText } from "prismic-reactjs";
import htmlSerializerProjects from "../../utils/htmlSerializerProjects"

import "../../styles/global.css";

function ProjectTemplatePage( {data} ) {
  return (
    <Layout>
        <h2 className="text-2xl lg:text-3xl xl:text-4xl leading-normal lg:leading-normal xl:leading-normal">{data.prismicProject.data.project_title.text}</h2>
        <p className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl leading-normal lg:leading-normal xl:leading-normal mb-3 xl:mb-4 text-ds-grey">{data.prismicProject.data.lede.text}</p>

        <GatsbyImage className="w-full mb-6 md:mb-10 xl:mb-14" image={getImage(data.prismicProject.data.feature_image.gatsbyImageData)} alt="Two boys sitting on a porch in rural Australia" />

        <div className="md:flex md:items-start md:justify-between mb-6 md:mb-10 xl:mb-14">
            <div className="md:w-5/12">
            <RichText htmlSerializer={htmlSerializerProjects} render={data.prismicProject.data.introduction.raw}/>
            </div>

            <table className="w-full md:w-1/2 table-fixed text-xs sm:text-sm lg:base font-light">
                <tr className="border-t border-b border-black">
                    <td className="w-2/5 py-2">Art direction<br/>
                        Publication design<br/>
                        Campaign design</td>
                    <td className="py-2 align-baseline">Dialogic Studios</td>
                </tr>
                <tr className="border-t border-b border-black">
                    <td className="py-2">Campaign Manager</td>
                    <td className="py-2">Kathryn Favelle</td>
                </tr>

                <tr className="border-t border-b border-black">
                    <td className="py-2">Photography</td>
                    <td className="py-2">
                        <a href="https://www.jamesgreen.com.au/">James Green</a>
                    </td>
                </tr>
                <tr className="border-t border-b border-black">
                    <td className="py-2">Printing</td>
                    <td className="py-2">
                        <a href="https://www.carbon8.com.au/">Carbon8</a>
                    </td>
                </tr>
                <tr className="border-t border-b border-black">
                    <td className="py-2">Folio photography</td>
                    <td className="py-2">
                        <a href="http://foliol.io/">Foliolio</a>
                    </td>
                </tr>
                <tr className="border-t border-b border-black">
                    <td className="py-2 align-baseline">Thank you</td>
                    <td className="py-2">The staff of the Library who allowed us into your homes to help create these beautiful images</td>
                </tr>
            </table>
        </div>

        <SliceZone slices={data.prismicProject.data.body}/>

        <p className="text-2xl lg:text-3xl xl:text-4xl mb-6 md:mb-10 xl:mb-14">
            <Link to="../work">View more of our work</Link>
        </p>

    </Layout>
  );
}

export const query = graphql`
query PrismicProjectQuery($id: String!) {
    prismicProject(id: {eq: $id}) {
      data {
        feature_image {
          gatsbyImageData(placeholder: BLURRED)
        }
        lede {
          text
        }
        project_title {
          text
        }
        services
        introduction {
          raw
        }
        body {
          ... on PrismicProjectDataBodyImagerySingleLandscape {
            id
            slice_type
            items {
              landscape_image {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          ... on PrismicProjectDataBodyText {
            id
            slice_type
            items {
              text {
                raw
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectTemplatePage;
