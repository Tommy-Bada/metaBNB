import Image from "./assets/nft-section-image.svg"

function NFTSection() {
   return(
    <div id="nft-section">
        <div>
            <p id="nft-section-top">Metabnb NFTs</p>
            <p id="nft-section-middle">Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <div><button id="learn-more-btn">Learn more</button></div>
        </div>
        <div>
            <img src={Image} className="nft-img" alt="Images of Sample NFTs" />
        </div>
    </div>
   )
}

export default NFTSection