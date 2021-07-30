import * as React from "react";

import Layout from "../../components/Layout";

import { graphql, Link } from "gatsby";
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image";
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

        <StaticImage className="w-full mb-6 md:mb-10 xl:mb-14" src="../../images/nla01.jpg" alt="Two boys sitting on a porch in rural Australia" />

        <div className="md:w-7/12 lg:w-1/2 float-right">
            <p className="mb-4 lg:mb-8">A key part of the Library's campaign was a beautiful booklet to go to potential donors. For the cover, we paired the familiar kraft board of archival boxes with the marble patterning of the Library's foyer. And the inside housed James Green amazing shots of Australians interacting with the Digital Archives from the comfort of their own homes.</p>
        </div>

        <StaticImage className="w-full mb-6 md:mb-10 xl:mb-14" src="../../images/nla01.jpg" alt="Two boys sitting on a porch in rural Australia" />

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
      }
    }
  }
`

export default ProjectTemplatePage;
