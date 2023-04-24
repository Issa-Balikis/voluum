import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';



const Navbar = () => {
     const [sideBar, setSideBar] = useState(false)

    const toggleNavBar = () => {
        setSideBar(prevState => !prevState)
    }

    return (
        <div className="navbar">
            <Link to="/">
           <img src="../logo.png" alt="" />  
           </Link>
            <nav>
                <ul className={sideBar ? "navlinks-sidebar" : "navlinks" } onClick={toggleNavBar}>
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
                    <div className="nav-btn">
                        <Button className="btn-demo">View Demo</Button>
                        <Button className="btn-gt">Get Started</Button>
                    </div>
                </ul>
            </nav>
           
             <div className="side-btn">
                    <div onClick={toggleNavBar}>
                        {sideBar ? <AiOutlineClose /> : <FaBars /> }
                    </div>
                </div>
        </div>
     );
}
 
export default Navbar;