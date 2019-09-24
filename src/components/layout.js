import React from 'react'

import Footer from "./footer"
import Header from "./header"
import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

import { Helmet } from "react-helmet"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Cheddar Games</title>
        </Helmet>
      <Header />
      <div className={layoutStyles.content}>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout;