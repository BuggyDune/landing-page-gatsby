import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function SocialIcons() {
  return (
    <div className="text-center md:text-right my-6 md:my-0">
      <a href="#" className="text-blue-500 mr-5">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="#" className="text-red-500">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  )
}
