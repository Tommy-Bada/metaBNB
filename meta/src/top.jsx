import TopImage from "./assets/top-image.svg"

function Top(){
    return(
        <div id="top-component">
            <div>
                <p id="top-text">Rent a <span class="top-colored-text">Place</span> away from <span class="top-colored-text">Home</span> in the <span class="top-colored-text">Metaverse</span></p>
                <p id="top-paragraph">We provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <form >
                    <input type="text" id="search" name="search" placeholder="search for location"/>
                    <input type="submit" value="Search" id="submit" />
                </form>
            </div>
            <div><img src={TopImage} className="nft-img" alt="Images of Houses in the metaverse" /></div>
        </div>
    )
}
export default Top