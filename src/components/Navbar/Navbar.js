import logo from '../images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="d-flex justify-content-between container-fluid" style={{zIndex:'1',display:'flex',justifyContent:'space-between',alignItems : 'center'}}>
    <a className="navbar-brand" href="/" style={{'display':'block'}}><img src={logo} alt='' className='logoimage'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{'flexDirection':'row-reverse'}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" id='navitems'>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/'}>Home</Link>
        </li>
        
        <li className="nav-item dropdown">
          {// eslint-disable-next-line
            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Paper division
          </a>}
          <ul className="dropdown-menu" id='dropdown'>
            <li><Link className="dropdown-item" to="/productDetails/paperangleboard">Paper Angle board</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/paperangleprotector">Paper Angle Protector</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/paperangletray">Paper Angle Tray</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/lcdspecialized">LCD specialized</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          {// eslint-disable-next-line
            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plastic division
          </a>}
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/productDetails/ppbinbox">PP BIN/BOX</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/ppcollapsablebinbox">PP COLLAPSABLE BIN/BOX</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/epefitments">EPE FITMENTS</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/esdppreusablebinbox">ESD PP REUSABLE BIN/BOX</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/epefoamsheets">EPE FOAM SHEETS</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/epefoamroll">EPE FOAM ROLL</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/airbubblepouches">AIR BUBBLE POUCHES</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/epepouch">EPE POUCH</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link active" to={'/#aboutus'}>About us</HashLink>
        </li>
        {/* <li className="nav-item dropdown">
          {// eslint-disable-next-line
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>}
          <ul className="dropdown-menu">
            <li><HashLink className="dropdown-item" to="/#featuredProducts">Featured Products</HashLink></li>
            <li><HashLink className="dropdown-item" to="/#chooseUs">Why Choose Us</HashLink></li>
            <li><HashLink className="dropdown-item" to="/#partners">Our Partners</HashLink></li>
            <li><HashLink className="dropdown-item" to="/#homePage">Back to top</HashLink></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <a className="nav-link active" href={'mailto:saisuperpack@email.com?subject=Drop%20In%20Your%20requestsSubject&body='}>Contact us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
