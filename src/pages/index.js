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
            </p>
            <p>
                Follow development on the <Link to="/blog">devblog</Link>
            </p>
            <p>
                Checkout future blog/engine/game plans on <a href="https://trello.com/cheddargames">Trello</a>
            </p>
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
