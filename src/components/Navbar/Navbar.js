import logo from '../images/SAI SUPER PACK Logo 1 correct.png'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg" style={{backgroundColor : "white"}}>
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
            <Link className="nav-link active" to={'/productDetails/PaperDivision/paperangleboard'} role="button" aria-expanded="false">
            Paper Division
          </Link>}
        </li>
        <li className="nav-item">
          {// eslint-disable-next-line
            <Link className="nav-link active " to={'/productDetails/PlasticDivision/ppbinbox'}  role="button" aria-expanded="false">
            Plastic Division
          </Link>}
         
        </li>
        <li className="nav-item dropdown">
          {// eslint-disable-next-line
            <Link className="nav-link active" to={'/productDetails/ledDivision'}  role="button" aria-expanded="false">
            LED Division
          </Link>}
        </li>
        <li className="nav-item">
          <HashLink className="nav-link active" to={'/#aboutus'}>About Us</HashLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
