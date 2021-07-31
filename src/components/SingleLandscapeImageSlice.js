import * as React from "react";
import "../styles/global.css";
import { getImage, StaticImage, GatsbyImage } from "gatsby-plugin-image";


function SingleLandscapeImageSlice() {
    return (
        <img className="w-full mb-6 md:mb-10 xl:mb-14" src="../images/nla01.jpg" alt="Two boys sitting on a porch in rural Australia" />
    )
}

export default SingleLandscapeImageSlice

