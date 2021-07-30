import * as React from 'react'
import { Elements } from 'prismic-richtext'

// -- HTML Serializer
// This function will be used to change the way the HTML is loaded
const htmlSerializerProjects = function (type, element, content, children, key) {
  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      return (
        <p key={key} className="mb-4 lg:mb-8">
          {children}
        </p>
      )  

    // Don't wrap images in a <p> tag
    case Elements.image:
      return <img key={key} src={element.url} alt={element.alt || ''} />

    // Return null to stick with the default behavior
    default:
      return null
  }
}

export default htmlSerializerProjects