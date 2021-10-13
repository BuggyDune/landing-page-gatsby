import React from "react"
import { Link } from "gatsby"

export default function HomeNewsletter() {
  return (
    <div className="bg-newsletter bg-cover bg-no-repeat text-center py-28">
      <p className="text-white">SUBSCRIBE</p>
      <h2 className="text-white text-5xl font-bold py-6">
        All Access Membership
      </h2>
      <Link className="py-1.5 px-6 text-base border-solid border-1 bg-blue-500 rounded-3xl text-white mr-3 hover:bg-yellow-400 hover:text-black transition duration-300 ease-in-out">
        Subscribe
      </Link>
    </div>
  )
}
