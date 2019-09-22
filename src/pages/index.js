import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout>
            <h1>Cheddar Games</h1>
            <h2>
                Making games with the in-house <Link to="/gouda">Gouda engine</Link>
            </h2>
            <p>
                Contact me <Link to="/contact">here</Link>
            </p>
            <p>
                About me <Link to="/about">here</Link>
            </p>
        </Layout>
    )
}

export default IndexPage
