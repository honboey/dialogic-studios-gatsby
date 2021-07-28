import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import "../styles/global.css";

function NotFoundPage() {
  return(
    <Layout>
      <div className="flex items-end">
        <div className="md:w-5/12 lg:w-1/2"></div>
        <section className="md:w-7/12 lg:w-1/2 mb-8 md:mb-12 xl:mb-16">
          <p className="text-sm sm:text-lg lg:text-xl xl:text-2xl text-ds-grey">404</p>
          <p className="text-2xl leading-normal lg:text-3xl lg:leading-normal xl:text-4xl xl:leading-normal mb-4 lg:mb-8">Oh no! We couldn't find the page you were looking for. Would you like to try again from the <Link to="/">homepage</Link>?</p>
          <Link to="/"><img className="w-full" src="https://media.giphy.com/media/l0HU20BZ6LbSEITza/source.gif" alt="John Cena saying 'You can't see me'" /></Link>
          <p className="text-xs sm:text-sm lg:base text-ds-grey"><a href="https://giphy.com/gifs/WWE-wwe-wrestling-l0HU20BZ6LbSEITza">via GIPHY</a></p>
        </section>
      </div>
    </Layout>
  )
}

export default NotFoundPage
