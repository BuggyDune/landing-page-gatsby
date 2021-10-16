import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HomeLogos from "../components/componentsHome/homeLogos"
import HomeSkills from "../components/componentsHome/homeSkills"
import HomeTeam from "../components/componentsHome/homeTeam"
import HomeNewsletter from "../components/componentsHome/homeNewsletter"
import { Button, ButtonDashed } from "../components/shared/button"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="main__section bg-hero-pattern bg-cover h-full mx-auto flex items-center py-60 pb-2 md:pb-40">
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
            <Button to="/">Start Course</Button>
            <ButtonDashed>View Course</ButtonDashed>
          </div>
        </div>
        <div className="md:w-2/4 w-full md:block hidden">
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

    <div className="md:bg-section-pattern bg-contain bg-no-repeat bg-left-bottom">
      <div className="container max-w-screen-xl bg-transparent mx-auto p-5 pt-20 pb-2">
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
          <div className="my-10 z-10 md:w-6/12	pl-20 pr-10 md:pr-24">
            <span className="uppercase">
              <span className="w-3.5 h-3.5 inline-block rounded-full bg-red-400 mr-2"></span>
              FEATURED COURSE
            </span>
            <h2 className="text-4xl md:my-6 font-semibold">
              Getting Started With Python 3 for Beginner
            </h2>
            <div>
              <p className="font-bold mb-5">
                Nibh enim nisi amet et nunc varius facilisis nulla non urna
                pulvinar felis, faucibus id placerat.
              </p>
              <div className="flex my-10">
                <div className="w-6/12">
                  <div className="py-1">
                    <span className="w-3.5 h-3.5 inline-block rounded-full bg-blue-400 mr-2"></span>
                    Fundamental
                  </div>
                  <div className="py-1">
                    <span className="w-3.5 h-3.5 inline-block rounded-full bg-blue-400 mr-2"></span>
                    Input and output
                  </div>
                </div>
                <div className="w-6/12">
                  <div className="py-1">
                    <span className="w-3.5 h-3.5 inline-block rounded-full bg-blue-400 mr-2"></span>
                    Conditional branching
                  </div>
                  <div className="py-1">
                    <span className="w-3.5 h-3.5 inline-block rounded-full bg-blue-400 mr-2"></span>
                    8+ more lessons
                  </div>
                </div>
              </div>
              <Button>Start Course</Button>
            </div>
          </div>
        </div>
        <HomeSkills />
      </div>
    </div>
    <HomeTeam />
    <HomeNewsletter />
  </Layout>
)

export default IndexPage
