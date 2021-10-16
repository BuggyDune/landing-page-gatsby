import React from "react"

const PageHeaders = ({ children }) => {
  return (
    <div className="bg-hero-pattern pt-40 pb-16">
      <div className="container max-w-screen-xl mx-auto text-center">
        {children}
      </div>
    </div>
  )
}

export default PageHeaders
