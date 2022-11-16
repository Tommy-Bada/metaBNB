import Logo from "./assets/logo-white.svg"
import Facebook from "./assets/facebook.svg"
import Twitter from "./assets/twitter.svg"
import Instagram from "./assets/instagram.svg"

function Footer(){
    return(
       <footer>
        <div>
            <div>
                <div><img src={Logo} alt="metamask logo" /></div>
                <div id="socials">
                    <div><img src={Facebook} alt="facebook logo" /></div>
                    <div><img src={Instagram} alt="instagram logo" /></div>
                    <div><img src={Twitter} alt="twitter logo" /></div>
                </div>
            </div>
            <div>
                <p className="footer-h">Commmunity</p>
                <ul className="footer-links">
                <li><a href="#">NFT</a></li>
                <li><a href="#">Tokens</a></li>
                <li><a href="#">Landlords</a></li>
                <li><a href="#">Discord</a></li>
                </ul>
            </div>
            <div>
                <p className="footer-h">Places</p>
                <ul className="footer-links">
                <li><a href="#">Castle</a></li>
                <li><a href="#">Farm</a></li>
                <li><a href="#">Beach</a></li>
                <li><a href="#">Learn more</a></li>
                </ul>
            </div>
            <div>
                <p className="footer-h">About us</p>
                <ul className="footer-links">
                <li><a href="#">Road map</a></li>
                <li><a href="#">Creators</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <p id="copyright-text"> &copy; 2022 Metabnb</p>
       </footer>
    )
}
export default Footer