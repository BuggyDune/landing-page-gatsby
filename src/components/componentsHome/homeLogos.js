import React from "react"
import html5 from "../../images/icon03.svg"

const allLogos = [
  {
    id: 1,
    name: "html5",
    url: html5,
  },
  {
    id: 2,
    name: "js",
    url: html5,
  },
  {
    id: 3,
    name: "js",
    url: html5,
  },
  {
    id: 4,
    name: "js",
    url: html5,
  },
  {
    id: 5,
    name: "js",
    url: html5,
  },
]

export default function HomeLogos() {
  return (
    <div className="container max-w-screen-xl mx-auto block md:flex justify-between items-center p-5">
      {allLogos.map(logo => (
        <div>
          <img
            key={logo.id}
            src={logo.url}
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt={logo.name}
            className="w-40	mx-auto"
          />
        </div>
      ))}
    </div>
  )
}
