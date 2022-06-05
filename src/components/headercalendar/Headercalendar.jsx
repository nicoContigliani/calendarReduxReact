import React from 'react'
import { Link, NavLink } from "react-router-dom";

const Headercalendar = () => {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Month
        </Link>
        <Link to="/day" style={{ padding: 5 }}>
          Day
        </Link>
        <Link to="/year" style={{ padding: 5 }}>
          Year
        </Link>
      </nav>

    </div>
  )
}

export default Headercalendar