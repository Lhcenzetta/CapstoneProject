import { Link } from "react-router-dom";
function Nav(){
    return(
            <ul className='navbar'>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "about">About</Link></li>
                <li><Link to = "/Main">Resevation</Link></li>
                <li><Link to = "Login">Login</Link></li>
                <li><Link to = "DevlopedBy">DevlopedBy</Link></li>
            </ul>

    )
}
export default Nav;