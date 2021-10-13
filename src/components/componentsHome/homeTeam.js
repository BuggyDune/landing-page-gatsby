import React from "react"
import adelin from "../../images/adelin.jpg"
import gabriel from "../../images/gabriel.jpg"

const allTeam = [
  {
    id: 1,
    description:
      "Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla",
    imgUrl: gabriel,
    name: "Gabriel:{CEO}",
  },
  {
    id: 2,
    description:
      "Massa amet, at dolor tellus pellentesque aenean in eget massa tincidunt habitasse volutpat adipiscing sed id sit auctor eu vivamus nulla",
    imgUrl: adelin,
    name: "Adelin:{Co-Founder}",
  },
]

export default function HomeTeam() {
  return (
    <div className="container max-w-screen-xl mx-auto  md:my-16 md:pt-2">
    <h2 class="text-4xl md:my-10 font-semibold md: ml-5">Meet With Our Team</h2>
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
