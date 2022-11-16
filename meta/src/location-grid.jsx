import LocationOne from "./assets/location-1.svg"
import LocationTwo from "./assets/location-2.svg"
import LocationThree from "./assets/location-3.svg"
import LocationFour from "./assets/location-4.svg"
import LocationFive from "./assets/location-5.svg"
import LocationSix from "./assets/location-6.svg"
import LocationSeven from "./assets/location-7.svg"
import LocationEight from "./assets/location-8.svg"

import Ratings from "./assets/5-star-rating.svg"

function LocationGrid() {
   return(
    <div id="location-grid">
        <p>Inspiration for your next adventure</p>
        <div id="box-container" >
            <div className="box">
                <div><img src={LocationOne} alt="Location image"/></div>
                <div className="box-top" >
                    <p>Desert King</p>
                    <p><b>1MBT</b> per night</p>
                </div>
                <div className="box-middle" >
                    <p>2345km away</p>
                    <p>Available for 2 weeks stay</p>
                </div>
                <div className="box-bottom"><img src={Ratings} alt="Ratings" /></div>
            </div>
            <div className="box">
                <div><img src={LocationTwo} alt="Location image"/></div>
                <div className="box-top" >
                    <p>Desert King</p>
                    <p><b>1MBT</b> per night</p>
                </div>
                <div className="box-middle" >
                    <p>2345km away</p>
                    <p>Available for 2 weeks stay</p>
                </div>
                <div className="box-bottom"><img src={Ratings} alt="Ratings" /></div>
            </div>
            <div className="box">
                <div><img src={LocationThree} alt="Location image"/></div>
                <div className="box-top" >
                    <p>Desert King</p>
                    <p><b>1MBT</b> per night</p>
                </div>
                <div className="box-middle" >
                    <p>2345km away</p>
                    <p>Available for 2 weeks stay</p>
                </div>
                <div className="box-bottom"><img src={Ratings} alt="Ratings" /></div>
            </div>
            <div className="box">
                <div><img src={LocationFour} alt="Location image"/></div>
                <div className="box-top" >
                    <p>Desert King</p>
                    <p><b>1MBT</b> per night</p>
                </div>
                <div className="box-middle" >
                    <p>2345km away</p>
                    <p>Available for 2 weeks stay</p>
                </div>
                <div className="box-bottom"><img src={Ratings} alt="Ratings" /></div>
            </div>
            <div className="box">
                <div><img src={LocationFive} alt="Location image"/></div>
                <div className="box-top" >
                    <p>Desert King</p>
                    <p><b>1MBT</b> per night</p>
                </div>
                <div className="box-middle" >
                    <p>2345km away</p>
                    <p>Available for 2 weeks stay</p>
                </div>
                <div className="box-bottom"><img src={Ratings} alt="Ratings" /></div>
            </div>
            <div className="box">
                <div><img src={LocationSix} alt="Location image"/></div>
                <div className="box-top" >
                    <p>Desert King</p>
                    <p><b>1MBT</b> per night</p>
                </div>
                <div className="box-middle" >
                    <p>2345km away</p>
                    <p>Available for 2 weeks stay</p>
                </div>
                <div className="box-bottom"><img src={Ratings} alt="Ratings" /></div>
            </div>
            <div className="box">
                <div><img src={LocationSeven} alt="Location image"/></div>
                <div className="box-top" >
                    <p>Desert King</p>
                    <p><b>1MBT</b> per night</p>
                </div>
                <div className="box-middle" >
                    <p>2345km away</p>
                    <p>Available for 2 weeks stay</p>
                </div>
                <div className="box-bottom"><img src={Ratings} alt="Ratings" /></div>
            </div>
            <div className="box">
                <div><img src={LocationEight} alt="Location image"/></div>
                <div className="box-top" >
                    <p>Desert King</p>
                    <p><b>1MBT</b> per night</p>
                </div>
                <div className="box-middle" >
                    <p>2345km away</p>
                    <p>Available for 2 weeks stay</p>
                </div>
                <div className="box-bottom"><img src={Ratings} alt="Ratings" /></div>
            </div>
        </div>
    </div>
   )
}

export default LocationGrid