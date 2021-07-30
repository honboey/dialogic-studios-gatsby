import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";

function ProjectItem(props) {
    return (
        <li className="xl:flex mb-8 md:mb-12 xl:mb-16 transition ease-in duration-200 all art-direction editorial campaign" >
            <div className="xl:w-2/5">
            <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">{props.projectName}</h2>
            <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey mb-1 md:mb-3 xl:mb-4" >{props.services}</p>
            </div>
            <div className="xl:w-3/5">
            <Link to={"../projects/" + props.slug} ><GatsbyImage image={props.featureImage} alt={props.altText}/></Link>
            </div>
        </li>
    )
}

export default ProjectItem