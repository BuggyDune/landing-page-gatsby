import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeLogos from "../components/componentsHome/homeLogos"
import HomePosts from "../components/componentsHome/homePosts"
import HomeTeam from "../components/componentsHome/homeTeam"
import HomeNewsletter from "../components/componentsHome/homeNewsletter"
import { Button, ButtonDashed } from "../components/shared/button"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="main__section bg-hero-pattern bg-cover h-full mx-auto flex items-center py-60 pt-28 md:pt-60 pb-2 md:pb-40">
      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row items-center p-5">
        <div className="md:w-2/4 w-full pr-10 text-white">
          <h1 className="text-3xl md:text-5xl font-semibold	py-4">
            Kick off your next, “great” Gatsby landing page with this Theme.
          </h1>
          <p>
            The project ships with the main Gatsby configuration, easy content
            customisation and nice animations.
          </p>
          <div className="flex my-5">
            <Button to="/">Get theme</Button>
            <ButtonDashed>Find more</ButtonDashed>
          </div>
        </div>
        <div className="md:w-2/4 w-full md:block  mb-5 md:mb-1">
          <StaticImage
            src="../images/online-programming-course-hero-video-thumb.jpg"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
    <HomeLogos />
    <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row items-center p-5">
      <div className="md:w-2/5">
        <StaticImage
          src="../images/online-programming-course-featured-review-figure-img.png"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
        />
      </div>
      <div className="my-10 md:-ml-20 z-10 md:w-3/5 md:pr-10">
        <span className="font-bold">OUR MISSION</span>
        <h2 className="text-2xl md:my-20 font-semibold">
          GatsbyJS comes with a powerfull echosystem for web development, but
          building a website without codint it's not quite possible yet. Our
          mission is to create a library of easy to configure and beautiful
          gatsby themes just for your needs. Even if your next project is just a
          simple landing page or a complex blog powered by WordPress, you are
          covered. We also offer full support, monthly updatea and even custom
          themes.
        </h2>
        <div>
          <p>Get in touch to learn more</p>
        </div>
      </div>
    </div>

    <div id="products" className="md:bg-section-pattern bg-contain bg-no-repeat bg-left-bottom">
      <div className="container max-w-screen-xl bg-transparent mx-auto p-5 md:pt-20 pb-2">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-6/12">
            <StaticImage
              src="../images/online-programming-course-featured-video.jpg"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt="A Gatsby astronaut"
              className="w-full rounded-xl"
            />
          </div>
          <div className="my-10 z-10 md:w-6/12 pl-6 md:pl-20 pr-6 md:pr-10">
            <span className="uppercase">
              <span className="w-3.5 h-3.5 inline-block rounded-full bg-red-400 mr-2"></span>
              BASE THEME
            </span>
            <h2 className="text-4xl md:my-6 font-semibold">
              Getting started with Gatsby was never easier
            </h2>
            <div>
              <p className="font-bold mb-5">
                This simple landing page will cover your bussines basic needs in
                no time.
              </p>
              <div className="md:flex my-10">
                <div className="md:w-6/12 mr-2">
                  <div className="py-1">
                    <span className="w-3.5 h-3.5 inline-block rounded-full bg-blue-400 mr-2"></span>
                    Easy content customisation
                  </div>
                  <div className="py-1">
                    <span className="w-3.5 h-3.5 inline-block rounded-full bg-blue-400 mr-2"></span>
                    Modern UI & Animation
                  </div>
                </div>
                <div className="md:w-6/12">
                  <div className="py-1">
                    <span className="w-3.5 h-3.5 inline-block rounded-full bg-blue-400 mr-2"></span>
                    Support and Updates
                  </div>
                  <div className="py-1">
                    <span className="w-3.5 h-3.5 inline-block rounded-full bg-blue-400 mr-2"></span>
                    Gatsby configuration
                  </div>
                </div>
              </div>
              <Button>Get now</Button>
            </div>
          </div>
        </div>
        <HomePosts />
      </div>
    </div>
    <HomeTeam />
    <HomeNewsletter />
  </Layout>
)

export default IndexPage
