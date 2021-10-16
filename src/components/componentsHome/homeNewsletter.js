import React from "react"
import { Button } from "../shared/button"

export default function HomeNewsletter() {
  return (
    <div className="bg-newsletter bg-cover bg-no-repeat text-center py-28">
      <p className="text-white">SUBSCRIBE</p>
      <h2 className="text-white text-5xl font-bold py-6">
        All Access Membership
      </h2>
      <Button>Subscribe</Button>
    </div>
  )
}
