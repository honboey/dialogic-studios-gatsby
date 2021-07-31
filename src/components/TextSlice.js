import * as React from "react";
import { RichText } from "prismic-reactjs";
import htmlSerializerProjects from "../utils/htmlSerializerProjects"

import "../styles/global.css";

function TextSlice() {
    return (
        <div className="md:w-7/12 lg:w-1/2 float-right">
            <p>Test</p>
            {/* <RichText htmlSerializer={htmlSerializerProjects} render={data.prismicProject.data.body[0].items[0].text.raw[0].text} /> */}
        </div>
    )
}

export default TextSlice