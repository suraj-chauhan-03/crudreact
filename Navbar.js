import React from 'react'
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/product">Product1</Link>  
        <Link to="/Register">Register Product</Link>
        <Link to="/product">Product3</Link>
        <Link to="/product">Product4</Link>
        <Link to="/product">Product5</Link>
        <Link to="/product">Product6</Link>

      </nav>
    </div>
  )
}

export default navbar
