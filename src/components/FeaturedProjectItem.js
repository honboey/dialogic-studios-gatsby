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
                <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">
                    {/* List services and capitalise the first letter of each item */}
                    {props.services.map((service, index) => {
                        if (index < props.services.length - 1) {
                            return service.charAt(0).toUpperCase() + service.slice(1) + ", "
                        }
                        return service.charAt(0).toUpperCase() + service.slice(1)                    
                    })}
                </p>
                </div>
            </div>
            <Link to={"/projects/" + props.slug}>
                <GatsbyImage className="w-full" image={props.featureImage} alt={props.altText}/>
            </Link>
        </li>
    )
}

export default FeaturedProjectItem