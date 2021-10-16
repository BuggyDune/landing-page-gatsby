import * as React from "react"

import Layout from "../components/layout"
import PageHeaders from "../components/pageHeaders"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <PageHeaders>
      <h1 className="text-5xl text-white">404: Not Found</h1>
    </PageHeaders>
    <div className="container max-w-screen-xl mx-auto p-10">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
