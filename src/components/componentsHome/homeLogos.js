import React from "react"
import html5 from "../../images/html5.svg"
import css3 from "../../images/css3.svg"
import JS from "../../images/JS.svg"
import react from "../../images/react.svg"
import nodejs from "../../images/node-js.svg"

const allLogos = [
  {
    id: 1,
    name: "html5",
    url: html5,
  },
  {
    id: 2,
    name: "CSS3",
    url: css3,
  },
  {
    id: 3,
    name: "js",
    url: JS,
  },
  {
    id: 4,
    name: "react",
    url: react,
  },
  {
    id: 5,
    name: "node-js",
    url: nodejs,
  },
]

export default function HomeLogos() {
  return (
    <div className="container max-w-screen-xl mx-auto block md:flex justify-between items-center p-5 py-16">
      {allLogos.map(logo => (
        <div className="w-1/5">
          <img
            key={logo.id}
            src={logo.url}
            alt={logo.name}
            className="w-12 mx-auto opacity-75 hover:opacity-100 transition duration-300 ease-in-out cursor-pointer"
          />
        </div>
      ))}
    </div>
  )
}
