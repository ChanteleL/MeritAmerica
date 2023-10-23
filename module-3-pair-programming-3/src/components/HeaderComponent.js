import { Navbar } from "reactstrap"
import '../App.css';
import'../styles.css';
import tePop from '../images/te-pops.png';

function Header(props) {
    return (
        <header id="index-header" class="nav-header">
            <div className="header-logo">
                <img src={tePop} alt="logo for te-pops, circle with arrow on popscile stick"/>
                <h1>Tech Elevator Popsicles</h1> 
            </div>
        
        <nav>
          <ul>
            <li>
                <a href="/">Home</a>
                </li>
            <li>
                <a href="">Store</a>
                </li>
            <li>
                <a href="Contactcomponent">Contact us</a>
                </li>
          </ul>
        </nav>
        </header>
    )

}
export default Header;
