import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeLogos from "../components/componentsHome/homeLogos"
import HomeSkills from "../components/componentsHome/homeSkills"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="main__section bg-hero-pattern h-full mx-auto flex items-center py-60 pb-2 md:pb-40">
      <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row items-center p-5">
        <div className="md:w-2/4 w-full pr-10 text-white">
          <span>ON-DEMAND COURSE</span>
          <h1 className="text-6xl font-bold	py-4">
            Complete Python Masterclass for Web Development
          </h1>
          <p>
            Amet facilisi phasellus lacus, sit massa, erat placerat aenean
            aliquet ultrices eleifend enim enim lacus elit.
          </p>
          <div className="flex my-5">
            <Link
              className="py-1.5 px-6 text-base border-solid border-1 bg-blue-500 rounded-3xl text-white mr-3 hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out"
              to="/"
            >
              Start Course
            </Link>
            <Link
              className="py-1.5 px-6 text-base border-solid border-2 border-white-900 rounded-3xl text-white hover:border-yellow-400 transition duration-300 ease-in-out"
              to="/"
            >
              View Course
            </Link>
          </div>
        </div>
        <div className="md:w-2/4 w-full md:block hidden">
          <StaticImage
            src="../images/online-programming-course-hero-video-thumb.jpg"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
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
        <span className="uppercase	">WHAT OUR HAPPY STUDENT SAY</span>
        <h2 className="text-4xl md:my-20 font-semibold">
          Mauris auctor sit consequat sed aenean purus egestas porta vel
          fermentum, nec nisi at eget non, nisi tincidunt tempus, etiam eget
          blandit tortor pulvinar est faucibus tristique blandit volutpat neque
          sit fusce.
        </h2>
        <div>
          <p className="font-bold">Elena Miles</p>
          <span>Student</span>
        </div>
      </div>
    </div>

    <div className="container max-w-screen-xl mx-auto flex flex-col md:flex-row items-center p-5 pt-20 pb-20">
      <div className="md:w-6/12">
        <StaticImage
          src="../images/online-programming-course-featured-video.jpg"
          quality={100}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          className="w-full rounded-xl"
        />
      </div>
      <div className="my-10 z-10 md:w-6/12	pl-10 pr-24">
        <span className="uppercase	">FEATURED COURSE</span>
        <h2 className="text-4xl md:my-10 font-semibold">
          Getting Started With Python 3 for Beginner
        </h2>
        <div>
          <p className="font-bold mb-5">
            Nibh enim nisi amet et nunc varius facilisis nulla non urna pulvinar
            felis, faucibus id placerat.
          </p>
          <Link
            className="py-1.5 px-6 text-base border-solid border-1 bg-blue-500 rounded-3xl text-white mr-3 hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out"
            to="/"
          >
            Start Course
          </Link>
        </div>
      </div>
    </div>

    <HomeSkills />
  </Layout>
)

export default IndexPage
