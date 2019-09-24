import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => {
    return (
        <Layout>
            <h2>
                About
            </h2>
            <p>
                Cheddar Games is a one-man shop building the <Link to="/gouda">Gouda</Link> engine and games with that engine.
                Follow development on the <Link to="/blog">devblog</Link>
            </p>
            <br/>
            <h2>
                Contact
            </h2>
            <p>
                email: <a href="mailto:aengusmcmillin@gmail.com">aengusmcmillin@gmail.com</a>
            </p>
        </Layout>
    )
}

export default IndexPage
