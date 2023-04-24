import { ArrowDownIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/">
           <img src="../logo.png" alt="" />
           </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/product">Product</Link>
                        <ChevronDownIcon />
                    </li>
                    <li>
                        <Link to="/prices">Prices</Link>
                    </li>
                    <li>
                        <Link to="/integration">Integrations</Link>
                    </li>
                    <li>
                        <Link to="/resources">Resources</Link>
                        <ChevronDownIcon />
                    </li>
                    <li>
                        <Link to="/company">Company</Link>
                    </li>
                </ul>
            </nav>
            <div className="nav-btn">
            <Button className="btn-demo">View Demo</Button>
            <Button className="btn-gt">Get Started</Button>
            </div>
        </div>
     );
}
 
export default Navbar;