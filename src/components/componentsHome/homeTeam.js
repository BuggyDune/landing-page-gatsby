import React from "react"
import adelin from "../../images/adelin.jpg"
import gabriel from "../../images/gabriel.jpg"

const allTeam = [
  {
    id: 1,
    description:
      "Started as a front-end developer on his own way of exploring new technologies, turned into an engineer driven to create eye-catching and secure applications...",
    imgUrl: gabriel,
    name: "Gabriel C. - CEO",
  },
  {
    id: 2,
    description:
      "For the last 7 years I've refined continuously my Front-end and Marketing skills so I could provide only professional work delivered in time for all my projects...",
    imgUrl: adelin,
    name: "Adelin C. - Co-Founder",
  },
]

export default function HomeTeam() {
  return (
    <div id="team" className="container max-w-screen-xl mx-auto  md:my-16 md:pt-2">
    <h2 class="text-4xl md:my-10 font-semibold md: ml-5 text-center">Meet with our team</h2>
      <div className="block md:flex justify-between">
        {allTeam.map(team => (
          <div key={team.id} className="md:w-6/12 m-5">
            <img src={team.imgUrl} className="w-28 rounded-xl ml-6" />
            <div className="bg-white shadow-lg p-5 rounded-xl pt-16 -mt-10">
              <span className="font-bold">{team.description}</span>
              <p className="text-l pt-4">{team.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
