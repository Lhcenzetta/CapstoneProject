import logo from '../assets/logo.jpg'
function Footer(){
    return(
        <footer>
            <img src = {logo} alt = "log resturant " height={200} width={200}/>
            <ul>
                <h1>Navigation</h1>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Resevation</a></li>
                <li><a>Order Online</a></li>
                <li><a>Login</a></li>
            </ul>
            <div className='footer'>
                <h1>Contact</h1>
                <p>1234 Ehn ST : chicago ,ol.60902 </p>
                <p>1234 /124-63t7</p>
                <p>info@iliajssshds.com </p>
            </div>

        </footer>
    )
}
export default Footer;