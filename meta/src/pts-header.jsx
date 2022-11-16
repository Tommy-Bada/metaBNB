import Filter from "./assets/setting-5.svg"

function PTSHeader() {
   return(
    <div id="pts-header">
    <ul>
        <li>Resturant</li>
        <li>Cottage</li>
        <li>Castle</li>
        <li>Fantasy City</li>
        <li>Beach</li>
        <li>Carbins</li>
        <li>Off-Grid</li>
        <li>Farm</li>
    </ul>
    <div id="location-btn">
        <p>Location</p>
        <div><img src={Filter} alt="filter-icon" /></div>
    </div>
    </div>
   )
}

export default PTSHeader