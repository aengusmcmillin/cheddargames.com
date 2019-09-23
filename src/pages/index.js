import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout>
            <h2>
                Making games with the in-house <Link to="/gouda">Gouda engine</Link>
            </h2>
        </Layout>
    )
}

export default IndexPage
