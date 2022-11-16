import PopupOne from "./assets/popup-1.svg" 
import PopupTwo from "./assets/popup-2.svg" 
import X from "./assets/x.svg"
function PopUp(){
    return(
        <div id="pop-up">
            <div id="wallet-1">
                <p>Connect Wallet</p>
                <div>< img src={X} onClick={function(){
                    document.getElementById("root").style.background ="white"
                    document.getElementById("pop-up").style.display = "none"
                }} /></div>
            </div>
            <p id="wallet-2">Choose your preffered wallet:</p>
            <div ><img src={PopupOne} className="pop"/></div>
            <div ><img src={PopupTwo} className="pop"/></div>
        </div>
    )
}

export default PopUp