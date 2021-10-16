import React from "react"
import { Button } from "../shared/button"

export default function HomeNewsletter() {
  return (
    <div id="subscribe" className="bg-newsletter bg-cover bg-no-repeat text-center py-28">
      <h2 className="text-white text-5xl font-bold py-6">
        Get Theme Right away
      </h2>
      <p className="text-white pb-8"> Enter your email below to get this Theme </p>

      <Button>Subscribe</Button>
    </div>
  )
}
