import React from 'react'

const Footer = () => {
    return (
        <footer>
          <div id="footer-content">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </footer>
    )
}
export default Footer
