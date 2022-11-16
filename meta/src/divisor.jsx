import MetaMask from "./assets/metamask.svg"
import OpenSea from "./assets/opensea.svg"
import MBToken from "./assets/mbtoken.svg"

function Divisor() {
   return(
    <div id="divisor">
        <div><img src={MBToken} className="nft-img" alt="MB Token Logo" /></div>
        <div><img src={MetaMask} className="nft-img" alt="Meta Mask Logo" /></div>
        <div><img src={OpenSea} className="nft-img" alt="Open Sea Logo" /></div>
    </div>
   )
}

export default Divisor