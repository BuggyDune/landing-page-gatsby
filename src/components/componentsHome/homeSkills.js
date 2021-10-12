import React from "react"
import skill from "../../images/skill.jpg"

const allSkills = [
  {
    id: 1,
    entryTitle: "Front end",
    imgUrl: skill,
    title: "HTML 5 Web Component Fundamentals",
  },
  {
    id: 2,
    entryTitle: "Front end",
    imgUrl: skill,
    title: "Mastering CSS 3 Flexbox With Real World Projects",
  },
  {
    id: 3,
    entryTitle: "Front end",
    imgUrl: skill,
    title: "Full Stack Web Development with React Hooks and Redux",
  },
]

export default function HomeSkills() {
  return (
    <div className="container max-w-screen-xl mx-auto block md:flex justify-between p-5">
      {allSkills.map(skill => (
        <div key={skill.id} className="w-4/12 m-5">
          <img src={skill.imgUrl} className="w-full rounded-xl" />
          <div className="bg-white shadow-md p-5 rounded-xl pt-16 -mt-10">
            <span className="uppercase">{skill.entryTitle}</span>
            <p className="text-xl pt-4">{skill.title}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
