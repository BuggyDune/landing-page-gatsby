import React from "react"
import SocialIcons from "./socialIcons"


export default function Footer() {
  return (
    <div className=" bg-black text-white py-10 px-10">
      <div className="container max-w-screen-xl mx-auto md:flex items-center">
        <div className="md:w-6/12 text-center md:text-left">
          Copyright © {new Date().getFullYear()} whygatsby.com. All rights
          reserved.
        </div>
        <div className="md:w-6/12">
          <SocialIcons />
        </div>
      </div>
    </div>
  )
}
