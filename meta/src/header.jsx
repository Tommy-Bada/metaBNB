import Logo from "./assets/logo.svg"
import { Link, NavLink } from 'react-router-dom'

function Header(){
    return(
        <header>
            <div><img src={Logo} alt="Logo" /></div>
            <ul id="nav-menu">
                <li><a href="#">Home</a></li>
                <li><Link to="/place-to-stay">Place to Stay</Link></li>
                <li><a href="#">NFTs</a></li>
                <li><a href="#">Community</a></li>
            </ul>
            <div>
                <button id="wallet-btn" onClick={function(){
                    document.getElementById("root").style.background ="#F1F3F9"
                    document.getElementById("pop-up").style.display = "block"
                }}>Connect Wallet</button>
            </div>
        </header>
    )
}
export default Header