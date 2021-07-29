import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/global.css";

function FeaturedProjectItem(props) {
    return (
        <li className="mb-8 md:mb-12 xl:mb-16">
            <div className="lg:flex items-baseline mb-1 md:mb-3 xl:mb-4">
                <div className="lg:w-1/2">
                <h2 className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl">{props.projectName}</h2>
                </div>
                <div className="lg:w-1/2">
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">{props.services}</p>
                </div>
            </div>
            <Link to="/projects/nla">
                <GatsbyImage className="w-full" image={props.featureImage} alt={props.altText}/>
            </Link>
        </li>
    )
}

export default FeaturedProjectItem