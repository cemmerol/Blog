import React from 'react';
import {Link,NavLink,withRouter} from 'react-router-dom';

const Navbar = (props) => {
    // setTimeout(() => {
    //     props.history.push('/about');
    // }, 3000);
    return (
        <nav>
        <div classname="nav-wrapper">
          <a href="#" class="brand-logo">Meclore</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/">Anasayfa</Link></li>
            <li><NavLink to="/about">Hakkında</NavLink></li>
            <li><NavLink to="contact">İletişim</NavLink></li>
          </ul>
        </div>
      </nav>
            
    )

}
export default  withRouter(Navbar);