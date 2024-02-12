import logo from '../images/SAI SUPER PACK Logo 1 correct.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{background : "white"}}>
  <div className="d-flex justify-content-between container-fluid" style={{zIndex:'1',display:'flex',justifyContent:'space-between',alignItems : 'center',backgroundColor : "white"}}>
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
            Paper Division
          </a>}
          <ul className="dropdown-menu" id='dropdown'>
            <li><Link className="dropdown-item" to="/productDetails/paperangleboard">Paper Angle board</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/paperangleprotector">Paper Angle Protector</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/paperangletray">Paper Angle Tray</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/lcdspecialized">LCD Specialized</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          {// eslint-disable-next-line
            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Plastic Division
          </a>}
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/productDetails/ppbinbox">PP Bin/Box</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/ppcollapsablebinbox">PP Collapsable Bin/Box</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/epefitments">EPE Fitments</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/esdppreusablebinbox">ESD PP Reusable Bin/Box</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/epefoamsheets">EPE Foam Sheets</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/epefoamroll">EPE Foam Roll</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/airbubblepouches">Air Bubble Pouches</Link></li>
            <li><Link className="dropdown-item" to="/productDetails/epepouch">EPE Pouch</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <HashLink className="nav-link active" to={'/#aboutus'}>About Us</HashLink>
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
          <a className="nav-link active" href={'mailto:saisuperpack@email.com?subject=Drop%20In%20Your%20requestsSubject&body='}>Contact Us</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
