import logo from '../images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {
  return (
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src={logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Paper division
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/productDetails/paperangleboard">Paper Angle board</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/paperangleprotector">Paper Angle Protector</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/paperangletray">Paper Angle Tray</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/lcdspecialized">LCD specialized</Link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plastic division
          </a>
          <ul class="dropdown-menu">
            <li><Link class="dropdown-item" to="/productDetails/ppbinbox">PP BIN/BOX</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/ppcollapsablebinbox">PP COLLAPSABLE BIN/BOX</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/epefitments">EPE FITMENTS</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/esdppreusablebinbox">ESD PP REUSABLE BIN/BOX</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/epefoamsheets">EPE FOAM SHEETS</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/epefoamroll">EPE FOAM ROLL</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/airbubblepouches">AIR BUBBLE POUCHES</Link></li>
            <li><Link class="dropdown-item" to="/productDetails/epepouch">EPE POUCH</Link></li>
          </ul>
        </li>
        <li class="nav-item">
          <HashLink class="nav-link" to={'/#aboutus'}>About us</HashLink>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><HashLink class="dropdown-item" to="/#featuredProducts">featured products</HashLink></li>
            <li><HashLink class="dropdown-item" to="/#chooseUs">why choose us</HashLink></li>
            <li><HashLink class="dropdown-item" to="/#partners">our partners</HashLink></li>
            <li><HashLink class="dropdown-item" to="/#homePage">back to top</HashLink></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
