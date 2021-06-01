import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <div
    style={{
      background: "#f4f4f4",
      paddingTop: "10px",
    }}
  >
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        justifyContent: "space-evently",
      }}
    >
      <li>
        <Link to="/">Домой</Link>
      </li>
      <li>
        <Link to="/about">Обо мне</Link>
      </li>

      <li>
        <Link to="/blog">Блог</Link>
      </li>
    </ul>
  </div>
)

export default Menu
