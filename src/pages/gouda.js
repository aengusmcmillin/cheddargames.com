import React from "react"

import Layout from "../components/layout"

const GoudaPage = () => {
  return (
    <Layout>
      <h1>Gouda</h1>
      <ul>
        <li>WIP Engine</li>
        <li>Built with Rust</li>
        <li>Custom ECS inspired by specs and simplecs</li>
        <li>Windowing Layer: Win32 for Windows, Cocoa for Mac, and (possibly) X11 for Linux</li>
        <li>Rendering Layer: Plans to incorporate D3D, Metal, and Vulkan</li>
      </ul>
    </Layout>
  )
}

export default GoudaPage
