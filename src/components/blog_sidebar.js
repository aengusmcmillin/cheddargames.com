import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import blogSidebarStyles from './blog_sidebar.module.scss'

const BlogSidebar = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
      <div className={blogSidebarStyles.sidebar}>
          <ul>
              <li>Engine Dev</li>
              <li>#100daysofgamedev</li>
              <li>Tutorials</li>
          </ul>
      </div>
    )
}

export default BlogSidebar;